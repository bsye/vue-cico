<template>
  <div
    class="vhd__datepicker__wrapper"
    :class="{
      'vhd__datepicker__wrapper--booking': bookings.length > 0,
    }"
    :ref="`DatePicker-${hash}`"
    v-if="value"
  >
    <div class="vhd__datepicker__close-button vhd__hide-on-desktop" v-if="isOpen" @click="closeMobileDatepicker">
      <i>+</i>
    </div>
    <div @click="toggleDatepicker()" class="vhd__datepicker__dummy-wrapper">
      <IconCalendar />
      <div class="vhd__datepicker__dummy-wrapper-input-wrapper">
        <p v-if="get(i18n, 'activity.filter.checkOut')" class="vhd__datepicker__dummy-wrapper-arrival">
          {{ get(i18n, 'activity.filter.checkIn') }}
        </p>
        <date-input
          :i18n="i18n"
          :input-date="responsiveFormatter(this.checkIn)"
          input-date-type="check-in"
          :is-open="isOpen"
          :toggle-datepicker="toggleDatepicker"
          :single-day-selection="singleDaySelection"
        />
      </div>
      <IconArrow />
      <div class="vhd__datepicker__dummy-wrapper-input-wrapper">
        <p v-if="get(i18n, 'activity.filter.checkOut')" class="vhd__datepicker__dummy-wrapper-departure">
          {{ get(i18n, 'activity.filter.checkOut') }}
        </p>
        <date-input
          v-if="!singleDaySelection"
          :i18n="i18n"
          :input-date="responsiveFormatter(this.checkOut)"
          input-date-type="check-out"
          :is-open="isOpen"
          :toggle-datepicker="toggleDatepicker"
          :single-day-selection="singleDaySelection"
        />
      </div>
      <div class="vhd__datepicker__clear-button" tabindex="0" @click="clearSelection" v-show="showClearSelectionButton">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68" role="img" aria-label="x">
          <title>x</title>
          <path d="M6.5 6.5l55 55m0-55l-55 55" stroke="#000" fill="none" stroke-linecap="square" />
        </svg>
      </div>
    </div>
    <div
      class="vhd__datepicker"
      :class="{
        'vhd__datepicker--open': isOpen,
        'vhd__datepicker--closed': !isOpen,
        'vhd__datepicker--right': positionRight,
      }"
    >
      <div v-if="isOpen" class="vhd__datepicker__inner">
        <CallToAction
          :included-nights="minNightCount"
          :nights-total="totalNights"
          :nights-in="dateFormater(checkIn, 'ddd DD MMM.')"
          :nights-out="dateFormater(checkOut, 'ddd DD MMM.')"
          :i18n="i18n"
        />
        <div class="vhd__datepicker__months" :class="{ 'vhd__datepicker__months--full': showSingleMonth }">
          <div
            v-if="isDesktop"
            :class="{
              vhd__datepicker__header: isDesktop,
            }"
          >
            <button
              type="button"
              class="vhd__datepicker__month-button vhd__datepicker__month-button--prev"
              @click="renderPreviousMonth"
              @keyup.enter.stop.prevent="renderPreviousMonth"
              :tabindex="isOpen ? 0 : -1"
              :disabled="activeMonthIndex === 0"
            >
              <svg width="10" height="20" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.5 11L6.5 6L1.5 1"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              class="vhd__datepicker__month-button vhd__datepicker__month-button--next"
              @click="renderNextMonth"
              @keyup.enter.stop.prevent="renderNextMonth"
              :disabled="isPreventedMaxMonth"
              :tabindex="isOpen ? 0 : -1"
            >
              <svg width="10" height="20" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.5 11L6.5 6L1.5 1"
                  stroke="#909090"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <Month
            v-for="(month, monthIndex) in paginateMonths"
            :key="`${datepickerMonthKey}-${monthIndex}-desktop`"
            ref="datepickerMonth"
            :month="month"
            :dayKey="datepickerDayKey"
            :weekKey="datepickerWeekKey"
            :isDesktop="isDesktop"
            :firstDayOfWeek="firstDayOfWeek"
            :showYear="showYear"
            :yearBeforeMonth="yearBeforeMonth"
            :activeMonthIndex="activeMonthIndex"
            :bookings="sortBookings"
            :checkIn="checkIn"
            :checkInPeriod="checkInPeriod"
            :checkOut="checkOut"
            :disableCheckoutOnCheckin="disableCheckoutOnCheckin"
            :duplicateBookingDates="duplicateBookingDates"
            :hoveringDate="hoveringDate"
            :hoveringPeriod="hoveringPeriod"
            :i18n="i18n"
            :isOpen="isOpen"
            :minNightCount="minNightCount"
            :nextDisabledDate="nextDisabledDate"
            :nextPeriodDisableDates="nextPeriodDisableDates"
            :options="dayOptions"
            :priceSymbol="priceSymbol"
            :screenSize="screenSize"
            :showPrice="showPrice"
            :disabledDates="disabledDates"
            :periodDates="periodDates"
            :sortedDisabledDates="sortedDisabledDates"
            :sortedPeriodDates="sortedPeriodDates"
            @clear-selection="clearSelection"
            @booking-clicked="handleBookingClicked"
            @day-clicked="handleDayClick"
            @enter-day="enterDay"
            @enter-month="enterMonth"
          />
        </div>
        <MobileActions
          @reset="clearSelection()"
          @selected="isOpen = !isOpen"
          :isClearDisabled="!(checkIn || checkOut)"
          :isSelectDisabled="!checkIn || !checkOut"
          :i18n="i18n"
          v-if="!isDesktop"
        />
      </div>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import fecha from 'fecha'

import get from 'lodash.get'
import Month from './components/Month.vue'
import MobileActions from './components/MobileActions.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconArrow from './icons/IconArrow.vue'
import DateInput from './components/DateInput.vue'
import CallToAction from './components/CallToAction.vue'
import Helpers from '../helpers'
// eslint-disable-next-line import/no-named-as-default
import i18nDefaults from '../../public/i18n/en'

export default {
  name: 'HotelDatePicker',
  components: {
    Month,
    CallToAction,
    MobileActions,
    IconCalendar,
    IconArrow,
    DateInput,
  },
  props: {
    bookings: {
      type: Array,
      default() {
        return []
      },
    },
    closeDatepickerOnClickOutside: {
      type: Boolean,
      default: true,
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: false,
    },
    disabledDates: {
      type: Array,
      default() {
        return []
      },
    },
    disabledDaysOfWeek: {
      type: Array,
      default() {
        return []
      },
    },
    disabledWeekDays: {
      type: Object,
      default() {
        return {}
      },
    },
    displayClearButton: {
      type: Boolean,
      default: true,
    },
    enableCheckout: {
      type: Boolean,
      default: false,
    },
    endDate: {
      type: [Date, String, Number],
      default: Infinity,
    },
    endingDateValue: {
      type: [Date, null],
      default: null,
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
    },
    format: {
      type: String,
      default: 'dddd DD MMMM',
    },
    hoveringTooltip: {
      default: true,
      type: [Boolean, Function],
    },
    i18n: {
      type: Object,
      default: () => i18nDefaults,
    },
    lastDateAvailable: {
      type: [Number, Date],
      default: Infinity,
    },
    maxNights: {
      type: [Number, null],
      default: null,
    },
    minNights: {
      type: Number,
      default: 1,
    },
    periodDates: {
      type: Array,
      default() {
        return []
      },
    },
    positionRight: {
      type: Boolean,
      default: false,
    },
    priceSymbol: {
      type: String,
      default: '',
    },
    showPrice: {
      type: Boolean,
      default: false,
    },
    showSingleMonth: {
      type: Boolean,
      default: false,
    },
    showYear: {
      type: Boolean,
      default: true,
    },
    singleDaySelection: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: [Date, String],
      default() {
        return new Date()
      },
    },
    startingDateValue: {
      type: [Date, null],
      default: null,
    },
    value: {
      type: Boolean,
      default: true,
    },
    yearBeforeMonth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeMonthIndex: 0,
      checkIn: this.startingDateValue,
      checkInPeriod: {},
      checkOut: this.endingDateValue,
      hoveringPeriod: {},
      customTooltip: '',
      customTooltipHalfday: '',
      datepickerDayKey: 0,
      datepickerMonthKey: 0,
      datepickerWeekKey: 0,
      dynamicNightCounts: null,
      hash: Date.now(),
      hoveringDate: null,
      isTouchMove: false,
      months: [],
      nextDisabledDate: null,
      nextPeriodDisableDates: [],
      open: false,
      screenSize: null,
      showCustomTooltip: false,
      sortedDisabledDates: null,
      xDown: null,
      xUp: null,
      yDown: null,
      yUp: null,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isOpen: {
      get() {
        return this.open
      },
      set(open) {
        this.open = open

        this.$emit('input', this.open)
      },
    },

    weekdays() {
      return [
        this.get(this.i18n, 'date.weekdays.sun'),
        this.get(this.i18n, 'date.weekdays.mon'),
        this.get(this.i18n, 'date.weekdays.tue'),
        this.get(this.i18n, 'date.weekdays.wed'),
        this.get(this.i18n, 'date.weekdays.thu'),
        this.get(this.i18n, 'date.weekdays.fri'),
        this.get(this.i18n, 'date.weekdays.sat'),
      ]
    },

    monthNames() {
      return Object.values(this.get(this.i18n, 'date.months'))
    },

    weekdaysShort() {
      return [
        this.get(this.i18n, 'date.weekdays.short.sun'),
        this.get(this.i18n, 'date.weekdays.short.mon'),
        this.get(this.i18n, 'date.weekdays.short.tue'),
        this.get(this.i18n, 'date.weekdays.short.wed'),
        this.get(this.i18n, 'date.weekdays.short.thu'),
        this.get(this.i18n, 'date.weekdays.short.fri'),
        this.get(this.i18n, 'date.weekdays.short.sat'),
      ]
    },

    totalNights() {
      if (!this.checkIn) return 0
      if (!this.checkOut) return 0

      return this.countDays(this.checkIn, this.checkOut)
    },
    sortBookings() {
      if (this.bookings.length > 0) {
        const bookings = [...this.bookings]

        return bookings.sort((a, b) => {
          const aa = a.checkInDate.split('/').reverse().join()
          const bb = b.checkOutDate.split('/').reverse().join()

          // eslint-disable-next-line no-nested-ternary
          return aa < bb ? -1 : aa > bb ? 1 : 0
        })
      }

      return []
    },
    duplicateBookingDates() {
      return this.baseHalfDayDates.filter(
        (
          (newArr) => (date) =>
            newArr.has(date) || !newArr.add(date)
        )(new Set()),
      )
    },
    baseHalfDayDates() {
      if (this.sortBookings.length > 0) {
        const bookings = this.sortBookings.map((x) => [x.checkInDate, x.checkOutDate])

        return bookings.reduce((a, b) => {
          return a.concat(b)
        })
      }

      return this.disabledDates
    },
    paginateMonths() {
      const months = []

      if (this.isDesktop) {
        months.push(this.months[this.activeMonthIndex])
        months.push(this.months[this.activeMonthIndex + 1])
      } else {
        this.months.forEach((el) => {
          months.push(el)
        })
      }

      return months
    },
    sortedPeriodDates() {
      let periodDates = []

      if (this.periodDates) {
        const sortFunction = (fecha1, fecha2) => {
          const v1 = fecha1.startAt.split('/').reverse().join() + fecha1.endAt.split('/').reverse().join()
          const v2 = fecha2.startAt.split('/').reverse().join() + fecha2.endAt.split('/').reverse().join()

          // eslint-disable-next-line no-nested-ternary
          return v1 < v2 ? -1 : v1 > v2 ? 1 : 0
        }

        periodDates = [...this.periodDates].sort(sortFunction)
      }

      return periodDates
    },
    sliceMonthMobile() {
      const nbMonthRenderDom = 4

      if (this.activeMonthIndex >= nbMonthRenderDom) {
        return this.months.slice(this.activeMonthIndex - 3, this.activeMonthIndex + 1)
      }

      return this.months.slice(0, nbMonthRenderDom)
    },
    isPreventedMaxMonth() {
      const lastIndexMonthAvailable = this.getMonthDiff(this.startDate, this.lastDateAvailable)

      return this.activeMonthIndex >= lastIndexMonthAvailable - 1
    },
    minNightCount() {
      return this.dynamicNightCounts || this.minNights
    },
    showClearSelectionButton() {
      return Boolean((this.checkIn || this.checkOut) && this.displayClearButton)
    },
    disabledWeekDaysObject() {
      const disabledDays = this.disabledDaysOfWeek.map((d) => d.toLowerCase())
      const names = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      const SUNDAY = names[0]
      const MONDAY = names[1]
      const TUESDAY = names[2]
      const WEDNESDAY = names[3]
      const THURSDAY = names[4]
      const FRIDAY = names[5]
      const SATURDAY = names[6]
      // The order of _default is important!
      const disabledWeekDaysObject = {
        sunday: disabledDays.includes(SUNDAY),
        monday: disabledDays.includes(MONDAY),
        tuesday: disabledDays.includes(TUESDAY),
        wednesday: disabledDays.includes(WEDNESDAY),
        thursday: disabledDays.includes(THURSDAY),
        friday: disabledDays.includes(FRIDAY),
        saturday: disabledDays.includes(SATURDAY),
      }

      return Object.assign(disabledWeekDaysObject, this.disabledWeekDays)
    },
    disabledWeekDaysArray() {
      const days = this.disabledWeekDaysObject

      const fn = function fnDisabledWeekDaysArray(day, ix) {
        return day[1] ? this.weekdays[ix] : false
      }

      return Object.entries(days)
        .map(fn)
        .filter((v) => v)
    },
    dayOptions() {
      return { ...this.$props, disabledWeekDaysObject: this.disabledWeekDaysObject }
    },
    numberOfMonths() {
      if (this.isDesktop) return 2

      return 12
    },
    isDesktop() {
      return this.windowWidth > 767
    },
  },
  watch: {
    bookings() {
      this.reRender()
    },
    checkIn(newDate) {
      this.$emit('check-in-changed', newDate)
      this.$emit('starting-date-changed', newDate)
      this.reRender()
    },
    checkOut(newDate) {
      this.$emit('ending-date-changed', newDate)

      if (this.checkOut !== null) {
        this.hoveringDate = null
        this.nextDisabledDate = null
        this.reRender()
        this.showCustomTooltip = false
      }

      this.$emit('check-out-changed', newDate)
      this.reRender()
    },
    firstDayOfWeek(newDay) {
      this.$emit('first-day-of-week-changed', newDay)
      const startDate = new Date(this.startDate)
      const offset = this.numberOfMonths + this.activeMonthIndex

      this.generateInitialMonths()

      for (let i = this.numberOfMonths; i < offset; i++) {
        this.createMonth(new Date(startDate.getFullYear(), startDate.getMonth() + i, 1))
      }

      this.reRender()
    },
    startingDateValue(date) {
      this.setCheckIn(date)
    },
    endingDateValue(date) {
      this.setCheckOut(date)
    },
    singleDaySelection(single) {
      if (single) {
        this.setCheckOut(this.checkIn)
      } else {
        this.setCheckIn(this.checkIn)
        this.setCheckOut(null)
      }

      this.reRender()
    },
    yearBeforeMonth() {
      this.reRender()
    },
    i18n() {
      this.configureI18n()
    },
    disabledDates() {
      this.nextDisabledDate = null
      this.reRender()
    },
  },
  created() {
    this.configureI18n()
    this.generateInitialMonths()
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })

    if (this.isDesktop) {
      document.addEventListener('click', this.handleClickOutside, false)
      document.addEventListener('keyup', this.escFunction, false)
    }
  },
  destroyed() {
    if (this.isDesktop) {
      document.removeEventListener('keyup', this.escFunction, false)
      document.removeEventListener('click', this.handleClickOutside)
    }
  },
  methods: {
    ...Helpers,
    get,
    transformDisabledWeekDays() {},
    configureI18n() {
      fecha.setGlobalDateI18n({
        dayNames: this.weekdays,
        dayNamesShort: this.shortenString(this.weekdaysShort, 3),
        monthNames: this.monthNames,
        monthNamesShort: this.shortenString(this.monthNames, 3),
        amPm: ['am', 'pm'],
        // D is the day of the month, function returns something like...  3rd or 11th
        DoFn(D) {
          return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10]
        },
      })
    },
    responsiveFormatter(date) {
      if (this.isDesktop) {
        return this.dateFormater(date, 'ddd DD MMM')
      }

      return this.dateFormater(date, 'DD MMM')
    },
    generateInitialMonths() {
      this.months = []

      if (
        this.checkIn &&
        (this.getMonthDiff(this.getNextMonth(new Date(this.startDate)), this.checkIn) > 0 ||
          this.getMonthDiff(this.startDate, this.checkIn) > 0)
      ) {
        this.createMonth(new Date(this.startDate))
        const count = this.getMonthDiff(this.startDate, this.checkIn)
        const monthCount = this.showSingleMonth ? count - 1 : count
        let nextMonth = new Date(this.startDate)

        for (let i = 0; i <= monthCount; i++) {
          const tempNextMonth = this.getNextMonth(nextMonth)

          this.createMonth(tempNextMonth)
          nextMonth = tempNextMonth
        }

        if (this.checkOut && this.getMonthDiff(this.checkIn, this.checkOut) > 0) {
          this.createMonth(this.getNextMonth(nextMonth))
          this.activeMonthIndex = 1
        }

        this.activeMonthIndex += count
      } else {
        let date = new Date(this.startDate)

        for (let i = 0; i < this.numberOfMonths; i++) {
          this.createMonth(date)
          date = this.getNextMonth(new Date(date))
        }
      }
    },
    handleBookingClicked(event, date, currentBooking) {
      this.$emit('booking-clicked', event, date, currentBooking)
    },
    escFunction(e) {
      const escTouch = 27

      if (e.keyCode === escTouch && this.isOpen && this.checkIn) {
        this.clearSelection()
      }
    },
    formatDate(date) {
      return this.dateFormater(date, this.format)
    },
    dateIsInCheckInCheckOut(date) {
      const compareDate = this.dateFormater(date)
      let currentPeriod = null

      this.sortedPeriodDates.forEach((d) => {
        if (
          d.endAt !== compareDate &&
          (d.startAt === compareDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, compareDate))
        ) {
          currentPeriod = d
        }
      })

      return currentPeriod
    },
    dayIsDisabled(date) {
      if (
        this.checkIn &&
        !this.checkOut &&
        !this.isDateLessOrEquals(date, this.nextDisabledDate) &&
        this.nextDisabledDate !== Infinity
      ) {
        return true
      }

      if (this.checkIn && !this.checkOut && this.isDateLessOrEquals(date, this.checkIn)) {
        return true
      }

      return false
    },
    enterMonth(event, month) {
      this.$emit('enter-month', event, month)
    },
    enterDay(event, day) {
      this.hoveringDate = this.singleDaySelection ? null : day.date
      this.$emit('enter-day', event, day)
    },
    setCurrentPeriod(date, eventType) {
      let currentPeriod = {}

      if (this.sortedPeriodDates.length > 0) {
        this.sortedPeriodDates.forEach((d) => {
          if (
            eventType === 'click' &&
            (d.startAt === this.dateFormater(date) ||
              (d.endAt !== this.dateFormater(date) && this.validateDateBetweenTwoDates(d.startAt, d.endAt, date)))
          ) {
            currentPeriod = d
          } else if (
            eventType === 'hover' &&
            (d.startAt === this.dateFormater(date) || this.validateDateBetweenTwoDates(d.startAt, d.endAt, date))
          ) {
            currentPeriod = d
          }
        })

        if (Object.keys(currentPeriod).length > 0) {
          this.hoveringPeriod = currentPeriod
        } else if (this.minNightCount > 0 && this.checkIn) {
          this.hoveringPeriod = {
            periodType: 'nightly',
            minimumDuration: this.minNightCount,
            startAt: this.checkIn,
            endAt: this.addDays(this.checkIn, this.minNightCount),
          }
        } else {
          this.hoveringPeriod = {
            periodType: 'nightly',
            minimumDuration: this.minNightCount,
            startAt: this.checkIn,
            endAt: this.addDays(this.checkIn, this.minNightCount),
          }
        }
      } else if (this.minNightCount > 0) {
        this.hoveringPeriod = {
          periodType: 'nightly',
          minimumDuration: this.minNightCount,
          startAt: this.checkIn,
          endAt: this.addDays(this.checkIn, this.minNightCount),
        }
      }
    },
    handleDayClick(event, date, formatDate, resetCheckin) {
      this.nextPeriodDisableDates = []

      if (resetCheckin) {
        this.clearSelection()
        this.$nextTick(() => {
          this.handleDayClick(event, date, formatDate, false)
        })

        return
      }

      let nextDisabledDate =
        (this.maxNights ? this.addDays(date, this.maxNights + 1) : null) ||
        this.getNextDate(this.sortedDisabledDates, date) ||
        this.nextDateByDayOfWeekArray(this.disabledWeekDaysArray, date, this.i18n) ||
        this.nextBookingDate(date) ||
        Infinity

      this.dynamicNightCounts = null

      if (this.enableCheckout) {
        nextDisabledDate = Infinity
      }

      if (this.checkIn == null && !this.singleDaySelection) {
        this.checkIn = date
        this.$emit('check-in-selected', date)
        this.setMinimumDuration(date)
      } else if (this.singleDaySelection) {
        this.checkIn = date
        this.$emit('check-in-selected', date)
        this.checkOut = date
      } else if (this.checkIn !== null && this.checkOut == null && this.isDateLessOrEquals(date, this.checkIn)) {
        this.checkIn = date
        this.$emit('check-in-selected', date)
      } else if (this.checkIn !== null && this.checkOut == null) {
        this.checkOut = date
        this.$emit('period-selected', event, this.checkIn, this.checkOut)
        /**
         * @deprecated since v4.0.0 beta 11
         */
        this.$emit('periodSelected', event, this.checkIn, this.checkOut)
      } else {
        this.checkOut = null
        this.checkIn = date
        this.$emit('check-in-selected', date)
        this.setMinimumDuration(date)
      }

      if (this.checkIn && !this.checkOut) {
        this.setCurrentPeriod(date, 'click')
        this.checkInPeriod = this.hoveringPeriod
      }

      this.nextDisabledDate = nextDisabledDate
      this.hoveringDate = null
      this.hoveringDate = date
      this.$emit('day-clicked', date, formatDate, nextDisabledDate)
      /**
       * @deprecated since v4.0.0 beta 11
       */
      this.$emit('dayClicked', date, formatDate, nextDisabledDate)
    },
    nextBookingDate(date) {
      let closest = Infinity

      if (this.sortBookings.length > 0) {
        const nextDateFormated = this.dateFormater(this.addDays(date, 1))
        const nextBooking = this.sortBookings.find(
          (booking) =>
            this.validateDateBetweenDate(booking.checkInDate, nextDateFormated) ||
            this.validateDateBetweenTwoDates(booking.checkInDate, booking.checkOutDate, nextDateFormated),
        )

        closest = nextBooking ? nextBooking.checkInDate : Infinity
      }

      return closest
    },
    handleClickOutside(event) {
      const ignoreClickOnMeElement = this.$refs[`DatePicker-${this.hash}`]

      if (ignoreClickOnMeElement) {
        const isClickInsideElement = ignoreClickOnMeElement.contains(event.target)

        if (!isClickInsideElement) {
          this.hideDatepicker()
        }
      }
    },
    reRender() {
      this.datepickerDayKey += 1
      this.datepickerMonthKey += 1
      this.datepickerWeekKey += 1
    },
    clearSelection() {
      this.hoveringDate = null
      this.checkIn = null
      this.checkOut = null
      this.nextDisabledDate = null
      this.nextPeriodDisableDates = []
      this.hoveringPeriod = {}
      this.checkInPeriod = {}
      this.reRender()
      this.$emit('clear-selection')
    },
    closeMobileDatepicker() {
      this.hideDatepicker()
    },
    hideDatepicker() {
      this.isOpen = false
      this.$nextTick(() => {
        this.$emit('cico-closed')
      })
    },
    showDatepicker() {
      this.isOpen = true
      this.$nextTick(() => {
        this.$emit('cico-opened')
      })
    },
    toggleDatepicker() {
      this[this.isOpen ? 'hideDatepicker' : 'showDatepicker']()
    },
    clearCheckIn() {
      if (this.checkIn && !this.checkOut) {
        this.clearSelection()
      }
    },
    clickOutside() {
      if (this.closeDatepickerOnClickOutside) {
        this.hideDatepicker()
      }
    },
    setMinimumDuration(date) {
      if (this.sortedPeriodDates) {
        let nextPeriod = null
        let currentPeriod = null
        const compareDate = this.dateFormater(date)

        this.sortedPeriodDates.forEach((d) => {
          if (
            d.endAt !== compareDate &&
            (d.startAt === compareDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, date))
          ) {
            currentPeriod = d
          }
        })

        if (currentPeriod) {
          this.sortedPeriodDates.forEach((period) => {
            if (period.startAt === currentPeriod.endAt) {
              nextPeriod = period
            }
          })

          if (this.checkIn && !this.checkOut && nextPeriod) {
            const endNextPeriod = this.addDays(nextPeriod.startAt, nextPeriod.minimumDuration - 1)
            const startNextPeriodPlusOne = this.addDays(nextPeriod.startAt, 1)
            const newDisablesDates = this.getDaysArray(startNextPeriodPlusOne, endNextPeriod)

            this.nextPeriodDisableDates = newDisablesDates
          }

          if (currentPeriod.periodType === 'nightly' && currentPeriod.endAt !== date) {
            this.dynamicNightCounts = currentPeriod.minimumDuration
          }

          if (currentPeriod.periodType === 'weekly_by_saturday' || currentPeriod.periodType === 'weekly_by_sunday') {
            const minimumDuration = currentPeriod.minimumDuration * 7

            this.dynamicNightCounts = minimumDuration
          }
        } else {
          this.dynamicNightCounts = 0
        }
      }
    },
    renderPreviousMonth() {
      if (this.activeMonthIndex >= 1) {
        const firstDayOfLastMonth = this.months[this.activeMonthIndex].days.filter(
          (day) => day.belongsToThisMonth === true,
        )
        const previousMonth = this.getPreviousMonth(firstDayOfLastMonth[0].date)

        this.activeMonthIndex--

        this.$emit('previous-month-rendered', previousMonth)
      }
    },
    renderNextMonth: throttle(function throttleRenderNextMonth() {
      if (
        (!this.showSingleMonth && this.activeMonthIndex < this.months.length - 2) ||
        (this.showSingleMonth && this.activeMonthIndex < this.months.length - 1)
      ) {
        this.activeMonthIndex++

        return
      }

      let firstDayOfLastMonth

      if (!this.isDesktop) {
        firstDayOfLastMonth = this.months[this.months.length - 1].days.filter((day) => day.belongsToThisMonth === true)
      } else {
        firstDayOfLastMonth = this.months[this.activeMonthIndex + 1].days.filter(
          (day) => day.belongsToThisMonth === true,
        )
      }

      if (this.endDate !== Infinity) {
        if (fecha.format(firstDayOfLastMonth[0].date, 'YYYYMM') === fecha.format(new Date(this.endDate), 'YYYYMM')) {
          return
        }
      }

      const nextMonth = this.getNextMonth(firstDayOfLastMonth[0].date)

      this.createMonth(nextMonth)
      this.activeMonthIndex++
      this.$emit('next-month-rendered', nextMonth)
    }, 350),
    setCheckIn(date) {
      this.checkIn = date
    },
    setCheckOut(date) {
      this.checkOut = date
    },
    createMonth(date) {
      const firstDay = this.getFirstDay(date, this.firstDayOfWeek)
      const month = {
        days: [],
      }

      for (let i = 0; i < 35; i++) {
        month.days.push({
          date: this.addDays(firstDay, i),
          belongsToThisMonth: this.addDays(firstDay, i).getMonth() === date.getMonth(),
        })
      }

      this.months.push(month)
    },
  },
}
</script>
