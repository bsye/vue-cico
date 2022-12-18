<template>
  <div :class="{ availability__disabled: isDayUnavailable }">
    <div
      class="cico__month-day"
      @click.prevent.stop="dayClicked($event, date)"
      :class="[
        beforeFirstValidDate,
        dayBelongToThisMonth,
        isCheckInDay,
        isBeforeToday,
        hoverIsCheckInDay,
        isAfterEndDate,
        hoverIsInTheRange,
        isInTheRange,
        isCheckOutDay,
        hoverIsCheckOutDay,
        isADisabledDayOfTheWeek,
        hoverIsCurrentDay,
        isValidDay,
      ]"
      ref="day"
    >
      <div class="cico__month-day-wrapper">
        <span class="day">{{ dayNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import fecha from 'fecha'
import get from 'lodash.get'
import Helpers from '../src/helpers'

export default {
  name: 'Day',
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
    checkInMinNights: {
      type: Array,
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
    disabledDates: {
      type: Array,
      default: () => [],
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
    month: {
      type: Object,
      required: true,
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
    }
  },
  computed: {
    isDayUnavailable() {
      if (!this.disabledDates) return false

      return this.disabledDates.find((disabled) => this.compareDay(disabled, this.date) === 0)
    },

    dayNumber() {
      return fecha.format(this.date, 'D')
    },

    isBeforeToday() {
      if (this.compareDay(this.date, new Date()) < 0) return 'disabled__before-first-valid-date'

      return null
    },

    beforeFirstValidDate() {
      const firstValidDate = this.addDays(this.checkIn, this.minNightCount)

      if (this.compareDay(this.date, firstValidDate) < 0 && this.checkIn && !this.checkOut) {
        return 'disabled__before-first-valid-date'
      }

      return null
    },

    dayBelongToThisMonth() {
      if (!this.belongsToThisMonth) {
        return 'disabled__from-another-month'
      }

      return null
    },

    hoverIsCurrentDay() {
      if (this.date !== this.hoveringDate) return null

      if (this.checkIn && !this.checkOut && this.compareDay(this.date, this.checkIn) === 0) {
        return 'hovering-current-day'
      }

      return null
    },

    isCheckInDay() {
      if (!this.checkIn) return null
      if (this.compareDay(this.date, this.checkIn) === 0) return 'check-in-date'

      return null
    },

    hoverIsCheckInDay() {
      if (!this.checkIn || (this.checkIn && this.checkOut))
        if (this.compareDay(this.date, this.hoveringDate) === 0) return 'hover__check-in-date'

      return null
    },

    isCheckOutDay() {
      if (!this.checkOut) return null
      if (this.compareDay(this.date, this.checkOut) === 0) return 'check-out-date'

      return null
    },

    hoverIsCheckOutDay() {
      if (this.checkIn && !this.checkOut) {
        if (this.compareDay(this.date, this.hoveringDate) === 0) return 'hover__check-out-date'
      }

      return null
    },

    hoverIsInTheRange() {
      if (!this.hoveringDate || !this.checkIn || this.checkOut) return null

      if (this.compareDay(this.checkIn, this.date) < 0) {
        if (this.compareDay(this.date, this.hoveringDate) < 0) return 'is-in-range'
      }

      return null
    },

    isInTheRange() {
      if (!this.checkIn || !this.checkOut) return null

      if (this.compareDay(this.checkIn, this.date) < 0) {
        if (this.compareDay(this.date, this.checkOut) < 0) return 'is-in-range'
      }

      return null
    },

    isAfterEndDate() {
      if (!this.options.endDate || this.options.endDate === Infinity) return null
      if (this.compareDay(this.date, this.options.endDate) === 1) return 'disabled__after-option-end-date'

      return null
    },

    isADisabledDayOfTheWeek() {
      if (this.isADisabledDay) return 'disabled__day-of-the-week'

      return null
    },

    isValidDay() {
      if (
        (!this.isADisabledDayOfTheWeek,
        !this.isCheckOutDay,
        !this.isCheckInDay,
        !this.isAfterEndDate,
        !this.dayBelongToThisMonth,
        !this.beforeFirstValidDate)
      )
        return 'is-valid-day'

      return null
    },

    nightsCount() {
      return this.countDays(this.checkIn, this.hoveringDate)
    },

    isADisabledDay() {
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      const day = days[this.date.getUTCDay()]

      return this.options.disabledWeekDaysObject[day]
    },
  },

  methods: {
    ...Helpers,
    get,
    isClickable() {
      if (this.$refs && this.$refs.day) {
        return getComputedStyle(this.$refs.day).pointerEvents !== 'none'
      }

      return true
    },
    dayClicked(event, date) {
      let resetCheckin = false
      let disableCheckoutOnCheckin = !this.disableCheckoutOnCheckin

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
  },
}
</script>
