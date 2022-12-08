<template>
  <div>
    <div class="cico__tooltip" v-html="tooltipMessageDisplay" v-if="showTooltip && options.hoveringTooltip" />
    <div
      class="cico__month-day"
      @click.prevent.stop="dayClicked($event, date)"
      :class="[dayClass, disabledClass, checkinCheckoutClass, bookingClass, { 'cico__month-day--today': isToday }]"
      :tabindex="tabIndex"
      ref="day"
    >
      <div class="cico__month-day-wrapper">
        <span class="day">{{ dayNumber }}</span>
        <Price :show="showPrice" :price="dayPrice" :symbol="priceSymbol" />
      </div>
    </div>
    <BookingBullet
      v-if="currentBooking && belongsToThisMonth && !isDisabled"
      :currentBooking="currentBooking"
      :duplicateBookingDates="duplicateBookingDates"
      :formatDate="formatDate"
      :previousBooking="previousBooking"
    />
  </div>
</template>

<script>
import fecha from 'fecha'
import get from 'lodash.get'
import Helpers from '../src/helpers'
import BookingBullet from './BookingBullet.vue'
import Price from './Price.vue'

export default {
  name: 'Day',
  components: {
    BookingBullet,
    Price,
  },
  props: {
    bookings: {
      type: Array,
      default: () => [],
    },
    activeMonthIndex: {
      type: Number,
    },
    belongsToThisMonth: {
      type: Boolean,
      default: false,
    },
    checkIn: {
      type: Date,
    },
    checkIncheckOutHalfDay: {
      type: Object,
      default: () => ({}),
    },
    checkInPeriod: {
      type: Object,
      default: () => ({}),
    },
    checkOut: {
      type: Date,
    },
    date: {
      type: Date,
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: false,
    },
    duplicateBookingDates: {
      type: Array,
      default: () => [],
    },
    hoveringDate: {
      type: Date,
    },
    hoveringPeriod: {
      type: Object,
      default: () => ({}),
    },
    hoveringTooltip: {
      default: true,
      type: Boolean,
    },
    i18n: {
      type: Object,
      default: () => ({}),
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    minNightCount: {
      type: Number,
      default: 0,
    },
    nextDisabledDate: {
      type: [Date, Number, String],
    },
    nextPeriodDisableDates: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
    },
    priceSymbol: {
      type: String,
      required: true,
    },
    priceDecimals: {
      type: [Number, null],
      default: 0,
    },
    screenSize: {
      type: String,
      default: '',
    },
    showCustomTooltip: {
      default: false,
      type: Boolean,
    },
    showPrice: {
      type: Boolean,
      default: false,
    },
    sortedDisabledDates: {
      type: Array,
      default: () => [],
    },
    sortedPeriodDates: {
      type: Array,
      default: () => [],
    },
    tooltipMessage: {
      default: null,
      type: String,
    },
  },
  data() {
    return {
      currentDate: new Date(),
      isDisabled: false,
      isHighlighted: false,
    }
  },
  computed: {
    previousBooking() {
      let previousBooking = null

      if (this.currentBooking && this.duplicateBookingDates.includes(this.currentBooking.checkInDate)) {
        previousBooking = this.bookings.find(
          (booking) =>
            booking.checkOutDate === this.formatDate && this.duplicateBookingDates.includes(booking.checkOutDate),
        )
      }

      return previousBooking
    },
    currentBooking() {
      return this.bookings.find(
        (booking) =>
          (this.duplicateBookingDates.includes(this.formatDate) && booking.checkInDate === this.formatDate) ||
          (!this.duplicateBookingDates.includes(this.formatDate) &&
            this.validateDateBetweenTwoDates(booking.checkInDate, booking.checkOutDate, this.formatDate)),
      )
    },
    dayNumber() {
      return fecha.format(this.date, 'D')
    },
    dayPrice() {
      let result = ''
      const currentDate = [...this.sortedPeriodDates]
        .reverse()
        .find((d) => this.validateDateBetweenTwoDates(d.startAt, d.endAt, this.formatDate))

      if (currentDate && currentDate.price) {
        const priceIsNumeric = typeof currentDate.price === 'number' || !Number.isNaN(parseFloat(currentDate.price))
        const weeklyPeriod = currentDate.periodType !== 'nightly'

        if (priceIsNumeric && weeklyPeriod) {
          // Convert the price when weekly and is not a float/int type
          const price = parseFloat(currentDate.price)
          const divisor = 7
          const decimals = Number.isNaN(parseFloat(this.priceDecimals)) ? 0 : parseFloat(this.priceDecimals)

          result = (price / divisor).toFixed(decimals)
        } else {
          result = currentDate.price
        }
      }

      return String(result)
    },
    halfDayClass() {
      if (Object.keys(this.checkIncheckOutHalfDay).length > 0) {
        const keyDate = this.dateFormatter(this.date)

        if (this.checkIncheckOutHalfDay[keyDate] && this.checkIncheckOutHalfDay[keyDate].checkIn) {
          if (this.checkIn && !this.checkOut) {
            return 'cico__month-day--halfCheckIn cico__month-day--valid'
          }

          return 'cico__month-day--halfCheckIn cico__month-day--invalid'
        }

        if (this.checkIncheckOutHalfDay[keyDate] && this.checkIncheckOutHalfDay[keyDate].checkOut) {
          return 'cico__month-day--halfCheckOut cico__month-day--valid'
        }
      }

      return false
    },
    bookingClass() {
      if (this.bookings.length > 0 && this.currentBooking) {
        if (
          !this.isDisabled &&
          this.validateDateBetweenTwoDates(
            this.currentBooking.checkInDate,
            this.currentBooking.checkOutDate,
            this.hoveringDate,
          )
        ) {
          if (this.checkIncheckOutHalfDay[this.formatDate]) {
            if (this.checkIn && !this.checkOut) {
              return 'cico__month-day--not-allowed cico__month-day--hovering'
            }

            if (this.checkIncheckOutHalfDay[this.formatDate].checkOut) {
              return 'cico__month-day--not-allowed cico__month-day--hovering'
            }

            return 'cico__month-day--not-allowed cico__month-day--invalid'
          }

          if (this.checkIn && !this.checkOut) {
            return 'cico__month-day--not-allowed cico__month-day--invalid'
          }

          return 'cico__month-day--not-allowed cico__month-day--hovering'
        }

        if (
          this.checkIncheckOutHalfDay[this.formatDate] &&
          this.checkIncheckOutHalfDay[this.formatDate].checkOut &&
          !this.duplicateBookingDates.includes(this.formatDate)
        ) {
          if (!this.checkIn) {
            return 'cico__month-day--not-allowed cico__month-day--hovering'
          }

          if ((this.checkIn && this.checkIn === this.date) || (this.checkIn && this.checkOut)) {
            return 'cico__month-day--not-allowed cico__month-day--hovering'
          }
        }

        if (this.checkIn && !this.checkOut && this.hoveringDate === this.date) {
          return 'cico__month-day--not-allowed cico__month-day--hovering'
        }

        return 'cico__month-day--not-allowed cico__month-day--invalid'
      }

      return ''
    },
    disabledClass() {
      return this.isDisabled || this.isADisabledDay ? ' cico__month-day--disabled ' : ''
    },
    dayClass() {
      if (!this.belongsToThisMonth) {
        // Good
        return 'cico__month-day--hidden'
      }

      // If the calendar has a minimum number of nights && !checkOut
      const nextValidDate = this.addDays(this.checkIn, this.minNightCount)
      const isDateAfterMinimumDuration = this.getDayDiff(this.hoveringDate, nextValidDate) <= 0
      let isNotMinimumDuration = ''

      if (
        !isDateAfterMinimumDuration &&
        !this.checkOut &&
        !this.isDisabled &&
        this.compareDay(this.date, this.checkIn) >= 0 &&
        this.minNightCount > 0 &&
        this.compareDay(this.date, this.addDays(this.checkIn, this.minNightCount)) === -1
      ) {
        isNotMinimumDuration = ' cico__month-day--disabled minimumDurationUnvalidDay'
      }

      // Current Day
      if (
        !this.isDisabled &&
        this.date === this.hoveringDate &&
        this.checkIn !== null &&
        this.checkOut == null &&
        this.dateFormatter(this.checkIn) !== this.dateFormatter(this.date)
      ) {
        return `cico__month-day--selected cico__month-day--hovering cico__currentDay${isNotMinimumDuration}`
      }

      // Highlight the selected dates and prevent the user from selecting
      // the same date for checkout and checkin
      if (this.checkIn !== null && this.dateFormatter(this.checkIn) === this.dateFormatter(this.date)) {
        if (this.minNightCount === 0) {
          return `cico__month-day--first-day-selected checkIn${isNotMinimumDuration}`
        }

        // Good
        return 'cico__month-day--disabled cico__month-day--first-day-selected checkIn'
      }

      // Checkout day
      if (this.checkOut !== null) {
        if (this.dateFormatter(this.checkOut) === this.dateFormatter(this.date)) {
          if (this.halfDayClass) {
            return `cico__month-day--disabled cico__month-day--last-day-selected ${this.halfDayClass} checkOut`
          }

          return 'cico__month-day--disabled cico__month-day--last-day-selected checkOut'
        }
      }

      // Only highlight dates that are not disabled
      if (this.isHighlighted && !this.isDisabled) {
        const classSelected = 'cico__month-day--selected'

        if (this.isADisabledDay) {
          return `${classSelected} cico__month-day--disabled afterMinimumDurationValidDay`
        }

        if (
          Object.keys(this.checkInPeriod).length > 0 &&
          this.checkInPeriod.periodType.includes('weekly') &&
          this.hoveringDate &&
          ((this.checkInPeriod.periodType === 'weekly_by_saturday' && this.hoveringDate.getDay() === 6) ||
            (this.checkInPeriod.periodType === 'weekly_by_sunday' && this.hoveringDate.getDay() === 0)) &&
          this.isDateLessOrEquals(this.date, this.hoveringDate)
        ) {
          // If currentPeriod has a minimumDuration 1
          if (this.checkInPeriod.minimumDuration === 1) {
            return `${classSelected} afterMinimumDurationValidDay`
          }

          // If currentPeriod has a minimumDuration superior to 1
          if (this.getDayDiff(this.hoveringDate, this.checkInPeriod.nextValidDate) <= 0) {
            return `${classSelected} afterMinimumDurationValidDay`
          }
        } else if (
          Object.keys(this.checkInPeriod).length > 0 &&
          this.checkInPeriod.periodType === 'nightly' &&
          this.hoveringDate &&
          this.hoveringPeriod.periodType.includes('weekly') &&
          ((this.hoveringPeriod.periodType === 'weekly_by_saturday' && this.hoveringDate.getDay() === 6) ||
            (this.hoveringPeriod.periodType === 'weekly_by_sunday' &&
              this.hoveringDate.getDay() === 0 &&
              this.isDateLessOrEquals(this.date, this.hoveringDate)))
        ) {
          return `${classSelected} afterMinimumDurationValidDay`
        }

        if (this.hoveringPeriod.periodType === 'nightly' && this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          return `${classSelected}  afterMinimumDurationValidDay`
        }

        if (this.checkIn && this.checkOut) {
          return `${classSelected}`
        }

        return `${classSelected} cico__month-day--valid`
      }

      // Good
      if (this.isDisabled || this.isADisabledDay) {
        return 'cico__month-day--disabled'
      }

      if (this.halfDayClass) {
        return `${this.halfDayClass}`
      }

      // Good
      return 'cico__month-day--valid'
    },
    checkinCheckoutClass() {
      let currentPeriod = null

      this.sortedPeriodDates.forEach((d) => {
        if (
          d.endAt !== this.formatDate &&
          (d.startAt === this.formatDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, this.formatDate))
        ) {
          currentPeriod = d
        }
      })

      if (
        this.nextPeriodDisableDates
          ? this.nextPeriodDisableDates.some((i) => this.compareDay(i, this.date) === 0)
          : null
      ) {
        return 'cico__month-day--disabled cico__month-day--not-allowed nightly'
      }

      if (currentPeriod) {
        if (currentPeriod.periodType === 'nightly' && this.belongsToThisMonth && !this.isDisabled) {
          if (
            ((!this.checkIn && !this.checkOut) || (this.checkIn && this.checkOut)) &&
            this.notAllowedDayDueToNextPeriod(currentPeriod)
          ) {
            return 'cico__month-day--disabled cico__month-day--not-allowed nightly'
          }

          return 'nightly'
        }

        // date.getDay() === 6 => saturday
        if (
          currentPeriod.periodType === 'weekly_by_saturday' &&
          currentPeriod.startAt !== this.formatDate &&
          currentPeriod.endAt !== this.formatDate &&
          this.date.getDay() !== 6
        ) {
          return 'cico__month-day--disabled cico__month-day--not-allowed weekly_by_saturday'
        }

        // Disable date between checkIn and nextDate, if minimumDuration is superior to 1
        if (this.notAllowDaysBetweenCheckInAndNextValidDate(6)) {
          return 'cico__month-day--disabled cico__month-day--not-allowed weekly_by_saturday'
        }

        // date.getDay() === 0 => sunday
        if (
          currentPeriod.periodType === 'weekly_by_sunday' &&
          currentPeriod.startAt !== this.formatDate &&
          currentPeriod.endAt !== this.formatDate &&
          this.date.getDay() !== 0
        ) {
          return 'cico__month-day--disabled cico__month-day--not-allowed weekly_by_sunday'
        }

        // Disable date between checkIn and nextDate, if minimumDuration is superior to 1
        if (this.notAllowDaysBetweenCheckInAndNextValidDate(0)) {
          return 'cico__month-day--disabled cico__month-day--not-allowed weekly_by_sunday'
        }

        return ''
      }

      return ''
    },
    formatDate() {
      return this.dateFormatter(this.date)
    },
    tabIndex() {
      if (!this.isOpen || !this.belongsToThisMonth || this.isDisabled || !this.isClickable()) {
        return -1
      }

      return 0
    },
    nightsCount() {
      return this.countDays(this.checkIn, this.hoveringDate)
    },
    tooltipMessageDisplay() {
      const dateIsInPeriod = this.validateDateBetweenTwoDates(
        this.hoveringPeriod.startAt,
        this.hoveringPeriod.endAt,
        this.date,
      )
      const checkInIsInPeriod = this.validateDateBetweenTwoDates(
        this.hoveringPeriod.startAt,
        this.hoveringPeriod.endAt,
        this.checkIn,
      )

      if (this.tooltipMessage) {
        return this.tooltipMessage
      }

      if (
        this.hoveringPeriod &&
        this.hoveringPeriod.type !== 'nightly' &&
        dateIsInPeriod &&
        checkInIsInPeriod &&
        this.nightsCount >= 7
      ) {
        return `${this.nightsCount / 7} ${this.pluralize(this.nightsCount, 'week')}`
      }

      if (this.nightsCount >= 1) {
        return `${this.nightsCount} ${
          this.nightsCount !== 1
            ? this.get(this.i18n, 'activity.filter.nights')
            : this.get(this.i18n, 'activity.filter.night')
        }`
      }

      return ''
    },
    showTooltip() {
      if (this.screenSize === 'desktop' || this.screenSize === 'tablet') {
        const showCustomTooltip = this.showCustomTooltip && this.date === this.hoveringDate
        const showDefaultTooltip =
          !this.isDisabled &&
          this.belongsToThisMonth &&
          this.date === this.hoveringDate &&
          this.tooltipMessageDisplay.length > 0 &&
          this.checkIn !== null &&
          this.checkOut === null

        return showCustomTooltip || showDefaultTooltip
      }

      return false
    },
    isToday() {
      return this.compareDay(this.currentDate, this.date) === 0
    },
    isADisabledDay() {
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      const day = days[this.date.getUTCDay()]

      return this.options.disabledWeekDaysObject[day]
    },
  },
  watch: {
    hoveringDate() {
      this.fetchHighlight()
    },
    checkIn() {
      this.fetchHighlight()
    },
    activeMonthIndex() {
      this.checkIfDisabled()
      this.checkIfHighlighted()

      if (this.checkIn !== null && this.checkOut !== null) {
        if (this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut)) {
          this.isHighlighted = true
        } else {
          this.isHighlighted = false
        }
      } else if (this.checkIn !== null && this.checkOut === null) {
        this.disableNextDays()
      }
    },
    nextDisabledDate() {
      this.disableNextDays()
    },
  },
  beforeMount() {
    this.checkIfDisabled()
    this.checkIfHighlighted()
  },
  methods: {
    ...Helpers,
    get,
    notAllowDaysBetweenCheckInAndNextValidDate(dayCode) {
      return (
        this.checkIn &&
        !this.checkOut &&
        this.date.getDay() === dayCode &&
        Object.keys(this.hoveringPeriod).length > 0 &&
        this.validateDateBetweenTwoDates(this.checkIn, this.hoveringPeriod.nextValidDate, this.date) &&
        this.dateFormatter(this.checkIn) !== this.formatDate &&
        this.dateFormatter(this.hoveringPeriod.nextValidDate) !== this.formatDate
      )
    },
    notAllowedDayDueToNextPeriod(currentPeriod) {
      // Check if the next period is directly after the current period
      const date = new Date(currentPeriod.endAt)
      let nextPeriod = null

      this.sortedPeriodDates.forEach((period) => {
        const dateA = new Date(period.startAt).setHours(0, 0, 0, 0)
        const dateB = new Date(date).setHours(0, 0, 0, 0)

        if (dateA === dateB) {
          nextPeriod = period
        }
      })

      if (nextPeriod) {
        // Subtract the startAt nextPeriod to the currentPeriod minimumDuration
        const subtractTimestamp = new Date(nextPeriod.startAt).setHours(0, 0, 0, 0)
        const subtractDate = new Date(subtractTimestamp)
        const resultDate = new Date(subtractDate.setDate(subtractDate.getDate() - currentPeriod.minimumDuration))

        if (!this.validateDateBetweenTwoDates(currentPeriod.startAt, resultDate, this.date)) {
          return true
        }
      }

      return false
    },
    isClickable() {
      if (this.$refs && this.$refs.day) {
        return getComputedStyle(this.$refs.day).pointerEvents !== 'none'
      }

      return true
    },
    dayClicked(event, date) {
      let resetCheckin = false
      let disableCheckoutOnCheckin = !this.disableCheckoutOnCheckin

      if (!this.checkIncheckOutHalfDay[this.formatDate] && this.currentBooking) {
        this.$emit('booking-clicked', event, date, this.currentBooking)

        return
      }

      if (this.disableCheckoutOnCheckin) {
        if (this.checkIn && this.checkIn === date) {
          if (this.checkOut) {
            disableCheckoutOnCheckin = true
            resetCheckin = true
          } else {
            disableCheckoutOnCheckin = false
            this.$emit('clear-selection')
          }
        } else {
          disableCheckoutOnCheckin = true
        }
      }

      if (disableCheckoutOnCheckin) {
        if (!this.isDisabled || this.isClickable()) {
          const formatDate = this.dateFormatter(date)

          this.$emit('day-clicked', event, date, formatDate, resetCheckin)
        } else {
          this.$emit('clear-selection')
          this.dayClicked(event, date)
        }
      }
    },
    compareEndDay() {
      if (this.options.endDate !== Infinity) {
        return this.compareDay(this.date, this.options.endDate) === 1
      }

      return false
    },
    checkIfDisabled() {
      this.isDisabled =
        // If this day is equal any of the disabled dates
        (this.sortedDisabledDates ? this.sortedDisabledDates.some((i) => this.compareDay(i, this.date) === 0) : null) ||
        // Or is before the start date
        this.compareDay(this.date, this.options.startDate) === -1 ||
        // Or is after the end date
        this.compareEndDay() ||
        // Or is in one of the disabled days of the week
        this.isADisabledDay ||
        // Or is after max Nights
        (this.date >= this.nextDisabledDate && this.nextDisabledDate !== null)

      // Handle checkout enabled
      if (this.options.enableCheckout) {
        if (this.compareDay(this.date, this.checkIn) === 1 && this.compareDay(this.date, this.checkOut) === -1) {
          this.isDisabled = false
        }
      }
    },
    checkIfHighlighted() {
      if (this.checkIn !== null && this.checkOut !== null && this.isDisabled === false) {
        if (this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut)) {
          this.isHighlighted = true
        } else {
          this.isHighlighted = false
        }
      }
    },
    disableNextDays() {
      if (
        this.nextDisabledDate !== null &&
        !this.isDateLessOrEquals(this.date, this.nextDisabledDate) &&
        this.nextDisabledDate !== Infinity
      ) {
        this.isDisabled = true
      } else if (this.isDateLessOrEquals(this.date, new Date().setDate(this.options.startDate.getDate() - 1))) {
        this.isDisabled = true
      }

      if (this.compareDay(this.date, this.checkIn) === 0 && this.minNightCount === 0) {
        this.isDisabled = false
      }

      if (this.isDateLessOrEquals(this.checkIn, this.date) && this.options.enableCheckout) {
        this.isDisabled = false
      }
    },
    fetchHighlight() {
      if (this.checkIn !== null && this.checkOut === null && this.isDisabled === false) {
        if (!this.isDateLessOrEquals(this.checkIn, this.date)) {
          this.isHighlighted = false
        } else if (this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          this.isHighlighted = true
        } else if (!this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          this.isHighlighted = false
        }
      }
    },
  },
}
</script>
