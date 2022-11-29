<template>
  <div
    class="vhd__datepicker__wrapper"
    :class="{
      'vhd__datepicker__wrapper--grid': gridStyle,
      'vhd__datepicker__wrapper--booking': bookings.length > 0,
    }"
    :ref="`DatePicker-${hash}`"
    v-if="value"
  >
    <div class="vhd__datepicker__close-button vhd__hide-on-desktop" v-if="isOpen" @click="closeMobileDatepicker">
      <i>+</i>
    </div>
    <div class="vhd__datepicker__dummy-wrapper" :class="{ 'vhd__datepicker__dummy-wrapper--is-active': isOpen }">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.69231 1.62069C5.69231 1.27789 5.96782 1 6.30769 1C6.64756 1 6.92308 1.27789 6.92308 1.62069V2.86207H9.38462V1.62069C9.38462 1.27789 9.66013 1 10 1C10.3399 1 10.6154 1.27789 10.6154 1.62069V2.86207H13.0769V1.62069C13.0769 1.27789 13.3524 1 13.6923 1C14.0322 1 14.3077 1.27789 14.3077 1.62069V2.86207H16.2483C17.2159 2.86207 18 3.65296 18 4.62886V7.82759V17.2332C18 18.2091 17.2159 19 16.2483 19H3.75169C2.78413 19 2 18.2091 2 17.2332V7.82759V4.62886C2 3.65296 2.78413 2.86207 3.75169 2.86207H5.69231V1.62069ZM3.23077 8.44828V17.2332C3.23077 17.5235 3.46387 17.7586 3.75169 17.7586H16.2483C16.5361 17.7586 16.7692 17.5235 16.7692 17.2332V8.44828H3.23077ZM16.7692 7.2069H3.23077V4.62886C3.23077 4.33856 3.46387 4.10345 3.75169 4.10345H5.69231V5.34483C5.69231 5.68762 5.96782 5.96552 6.30769 5.96552C6.64756 5.96552 6.92308 5.68762 6.92308 5.34483V4.10345H9.38462V5.34483C9.38462 5.68762 9.66013 5.96552 10 5.96552C10.3399 5.96552 10.6154 5.68762 10.6154 5.34483V4.10345H13.0769V5.34483C13.0769 5.68762 13.3524 5.96552 13.6923 5.96552C14.0322 5.96552 14.3077 5.68762 14.3077 5.34483V4.10345H16.2483C16.5361 4.10345 16.7692 4.33856 16.7692 4.62886V7.2069ZM6.30769 11.5517C6.64738 11.5517 6.92308 11.2737 6.92308 10.931C6.92308 10.5884 6.64738 10.3103 6.30769 10.3103C5.968 10.3103 5.69231 10.5884 5.69231 10.931C5.69231 11.2737 5.968 11.5517 6.30769 11.5517ZM9.38462 10.931C9.38462 11.2737 9.10892 11.5517 8.76923 11.5517C8.42954 11.5517 8.15385 11.2737 8.15385 10.931C8.15385 10.5884 8.42954 10.3103 8.76923 10.3103C9.10892 10.3103 9.38462 10.5884 9.38462 10.931ZM11.2308 11.5517C11.5705 11.5517 11.8462 11.2737 11.8462 10.931C11.8462 10.5884 11.5705 10.3103 11.2308 10.3103C10.8911 10.3103 10.6154 10.5884 10.6154 10.931C10.6154 11.2737 10.8911 11.5517 11.2308 11.5517ZM14.3077 10.931C14.3077 11.2737 14.032 11.5517 13.6923 11.5517C13.3526 11.5517 13.0769 11.2737 13.0769 10.931C13.0769 10.5884 13.3526 10.3103 13.6923 10.3103C14.032 10.3103 14.3077 10.5884 14.3077 10.931ZM6.30769 14.0345C6.64738 14.0345 6.92308 13.7564 6.92308 13.4138C6.92308 13.0712 6.64738 12.7931 6.30769 12.7931C5.968 12.7931 5.69231 13.0712 5.69231 13.4138C5.69231 13.7564 5.968 14.0345 6.30769 14.0345ZM9.38462 13.4138C9.38462 13.7564 9.10892 14.0345 8.76923 14.0345C8.42954 14.0345 8.15385 13.7564 8.15385 13.4138C8.15385 13.0712 8.42954 12.7931 8.76923 12.7931C9.10892 12.7931 9.38462 13.0712 9.38462 13.4138ZM11.2308 14.0345C11.5705 14.0345 11.8462 13.7564 11.8462 13.4138C11.8462 13.0712 11.5705 12.7931 11.2308 12.7931C10.8911 12.7931 10.6154 13.0712 10.6154 13.4138C10.6154 13.7564 10.8911 14.0345 11.2308 14.0345Z"
          fill="black"
        />
      </svg>
      <date-input
        :i18n="i18n"
        :input-date="formatDate(checkIn)"
        input-date-type="check-in"
        :is-open="isOpen"
        :toggle-datepicker="toggleDatepicker"
        :single-day-selection="singleDaySelection"
      />
      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8281 1.32812L17.8992 8.39919L10.8281 15.4703" stroke="#000" />
        <path d="M17.5 8.5H0.5" stroke="#C9C9C9" stroke-linecap="square" />
      </svg>
      <date-input
        v-if="!singleDaySelection"
        :i18n="i18n"
        :input-date="formatDate(checkOut)"
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
    <div
      class="vhd__datepicker"
      :class="{
        'vhd__datepicker--open': isOpen,
        'vhd__datepicker--closed': !isOpen,
        'vhd__datepicker--right': positionRight,
      }"
    >
      <div class="vhd__hide-on-desktop">
        <div
          v-if="isOpen"
          class="vhd__datepicker__dummy-wrapper vhd__datepicker__dummy-wrapper--no-border"
          :class="{ 'vhd__datepicker__dummy-wrapper--is-active': isOpen }"
          @click="toggleDatepicker"
        >
          <div
            class="vhd__datepicker__input"
            tabindex="0"
            :class="{
              'vhd__datepicker__dummy-input--is-active': isOpen && checkIn == null,
            }"
            type="button"
          >
            {{ `${checkIn ? formatDate(checkIn) : i18n['check-in']}` }}
          </div>
          <div
            class="vhd__datepicker__input"
            tabindex="0"
            :class="{
              'vhd__datepicker__dummy-input--is-active': isOpen && checkOut == null && checkIn !== null,
            }"
            type="button"
          >
            {{ `${checkOut ? formatDate(checkOut) : i18n['check-out']}` }}
          </div>
        </div>
      </div>
      <div v-if="isOpen" class="vhd__datepicker__inner">
        <div
          :class="{
            vhd__datepicker__header: isDesktop,
            'vhd__datepicker__header-mobile': !isDesktop,
          }"
        >
          <button
            type="button"
            class="vhd__datepicker__month-button vhd__datepicker__month-button--prev"
            @click="renderPreviousMonth"
            @keyup.enter.stop.prevent="renderPreviousMonth"
            :tabindex="isOpen ? 0 : -1"
            :disabled="activeMonthIndex === 0"
          />
          <button
            type="button"
            class="vhd__datepicker__month-button vhd__datepicker__month-button--next"
            @click="renderNextMonth"
            @keyup.enter.stop.prevent="renderNextMonth"
            :disabled="isPreventedMaxMonth"
            :tabindex="isOpen ? 0 : -1"
          />
        </div>
        <div class="vhd__datepicker__months" :class="{ 'vhd__datepicker__months--full': showSingleMonth }">
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
            :checkIncheckOutHalfDay="checkIncheckOutHalfDay"
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
            :showCustomTooltip="showCustomTooltip"
            :showPrice="showPrice"
            :disabledDates="disabledDates"
            :periodDates="periodDates"
            :sortedDisabledDates="sortedDisabledDates"
            :sortedPeriodDates="sortedPeriodDates"
            :tooltipMessage="customTooltipMessage"
            @clear-selection="clearSelection"
            @booking-clicked="handleBookingClicked"
            @day-clicked="handleDayClick"
            @enter-day="enterDay"
            @enter-month="enterMonth"
          />
        </div>
        <div
          v-if="!isDesktop && isOpen"
          :class="['vhd__datepicker__months-wrapper', { 'vhd__show-tooltip': showCustomTooltip && hoveringTooltip }]"
        >
          <div class="vhd__datepicker__tooltip--mobile" v-if="hoveringTooltip">
            <template v-if="customTooltipMessage">
              {{ cleanString(customTooltipMessage) }}
            </template>
          </div>
          <div class="vhd__datepicker__months" ref="swiperWrapper">
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
              :checkIncheckOutHalfDay="checkIncheckOutHalfDay"
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
              :showCustomTooltip="false"
              :showPrice="showPrice"
              :sortedDisabledDates="sortedDisabledDates"
              :sortedPeriodDates="sortedPeriodDates"
              :tooltipMessage="customTooltipMessage"
              @clear-selection="clearSelection"
              @booking-clicked="handleBookingClicked"
              @day-clicked="handleDayClick"
              @enter-day="enterDay"
              @enter-month="enterMonth"
            />
          </div>
        </div>
      </div>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import fecha from 'fecha'

import Month from './components/Month.vue'
import DateInput from './components/DateInput.vue'
import Helpers from '../helpers'
import i18nDefaults from '../../public/i18n/en'

export default {
  name: 'HotelDatePicker',
  components: {
    Month,
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
      default: 'YYYY-MM-DD',
    },
    gridStyle: {
      type: Boolean,
      default: true,
    },
    halfDay: {
      type: Boolean,
      default: true,
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
    tooltipMessage: {
      type: [String, null],
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
      checkIncheckOutHalfDay: {},
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
    }
  },
  computed: {
    isOpen: {
      get() {
        return this.open
      },
      set(open) {
        this.open = open

        if (!this.isDesktop) {
          const body = document.querySelector('body')

          if (open) {
            body.style.overflow = 'hidden'

            this.$nextTick(() => {
              if (this.$refs) {
                const { swiperWrapper } = this.$refs
                const monthHeihgt = this.$refs.datepickerMonth[0].offsetHeight
                const currentSelectionIndex = this.checkOut ? this.getMonthDiff(new Date(), this.checkOut) : 0

                swiperWrapper.scrollTop = currentSelectionIndex * monthHeihgt
              }
            })
          } else {
            body.style.overflow = ''
          }
        }

        this.$emit('input', this.open)
      },
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
      const months = [this.months[this.activeMonthIndex]]

      if (!this.showSingleMonth) {
        months.push(this.months[this.activeMonthIndex + 1])
      }

      return months
    },
    customTooltipMessage() {
      let tooltip = ''

      if (this.hoveringDate && (this.customTooltip || this.customTooltipHalfday)) {
        if (this.customTooltip && this.customTooltipHalfday) {
          tooltip = `${this.customTooltipHalfday}. <br/> ${this.customTooltip}`
        } else if (this.customTooltipHalfday && !this.customTooltip) {
          tooltip = this.customTooltipHalfday
        } else {
          tooltip = this.customTooltip
        }

        return tooltip
      }

      return this.tooltipMessage
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
      // const names = this.i18n['day-names']
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
      // const names = this.i18n['day-names']
      const names = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

      const fn = function fnDisabledWeekDaysArray(day, ix) {
        return day[1] ? names[ix] : false
      }

      return Object.entries(days)
        .map(fn)
        .filter((v) => v)
    },
    dayOptions() {
      return { ...this.$props, disabledWeekDaysObject: this.disabledWeekDaysObject }
    },
    numberOfMonths() {
      return this.showSingleMonth ? 1 : 2
    },
    isDesktop() {
      return this.screenSize === 'desktop'
    },
  },
  watch: {
    bookings() {
      this.createHalfDayDates(this.baseHalfDayDates)
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
        this.createHalfDayDates(this.baseHalfDayDates)
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
      this.createHalfDayDates(this.baseHalfDayDates)
      this.reRender()
    },
  },
  created() {
    this.configureI18n()
    this.generateInitialMonths()
  },
  mounted() {
    this.handleWindowResize()

    window.addEventListener('resize', this.handleWindowResize)

    if (this.isDesktop) {
      document.addEventListener('click', this.handleClickOutside, false)
      document.addEventListener('keyup', this.escFunction, false)
    }

    this.onElementHeightChange(document.body, () => {
      this.emitHeighChangeEvent()
    })
    this.createHalfDayDates(this.baseHalfDayDates)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleWindowResize)

    if (this.isDesktop) {
      document.removeEventListener('keyup', this.escFunction, false)
      document.removeEventListener('click', this.handleClickOutside)
    }
  },
  methods: {
    ...Helpers,
    transformDisabledWeekDays() {},
    configureI18n() {
      fecha.setGlobalDateI18n({
        dayNames: this.i18n['day-names'],
        dayNamesShort: this.shortenString(this.i18n['day-names'], 3),
        monthNames: this.i18n['month-names'],
        monthNamesShort: this.shortenString(this.i18n['month-names'], 3),
        amPm: ['am', 'pm'],
        // D is the day of the month, function returns something like...  3rd or 11th
        DoFn(D) {
          return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10]
        },
      })
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
        this.createMonth(new Date(this.startDate))

        if (!this.showSingleMonth) {
          this.createMonth(this.getNextMonth(new Date(this.startDate)))
        }
      }
    },
    handleBookingClicked(event, date, currentBooking) {
      this.$emit('booking-clicked', event, date, currentBooking)
      /**
       * @deprecated since v4.0.0 beta 11
       */
      this.$emit('bookingClicked', event, date, currentBooking)
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
    cleanString(string) {
      // eslint-disable-next-line no-useless-escape
      return string.replace(/\<br\/>/g, '')
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
      const formatDate = this.dateFormater(day.date)
      const halfDays = Object.keys(this.checkIncheckOutHalfDay)
      const disableDays = this.disabledDates
        .filter((disableDate) => !halfDays.includes(disableDate))
        .includes(formatDate)

      if (!this.dayIsDisabled(day.date) && day.belongsToThisMonth && !disableDays) {
        this.setCustomTooltipOnHover(day)
      }

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
    setCustomTooltipOnHover(day) {
      const { date } = day

      this.hoveringDate = date
      if (this.showCustomTooltip) this.showCustomTooltip = false

      this.setCurrentPeriod(date, 'hover')

      if (Object.keys(this.hoveringPeriod).length > 0) {
        // Create tooltip
        if (this.hoveringPeriod.periodType === 'weekly_by_saturday') {
          const dayCode = 6
          const text = this.i18n.tooltip.saturdayToSaturday

          this.showTooltipWeeklyOnHover(date, dayCode, text)
        } else if (this.hoveringPeriod.periodType === 'weekly_by_sunday') {
          const dayCode = 0
          const text = this.i18n.tooltip.sundayToSunday

          this.showTooltipWeeklyOnHover(date, dayCode, text)
        } else if (this.hoveringPeriod.periodType === 'nightly') {
          this.showTooltipNightlyOnHover(date)
        } else {
          // Clean tooltip
          this.showCustomTooltip = false
          this.customTooltip = ''
        }
      } else {
        this.hoveringPeriod = {}
      }

      if (this.halfDay) {
        this.createHalfDayTooltip(day.date)
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
        this.setCustomTooltipOnClick()
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
    setCustomTooltipOnClick() {
      if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType.includes('weekly')) {
        const nextValidDate = this.addDays(this.checkIn, this.minNightCount)

        this.checkInPeriod.nextValidDate = nextValidDate
        this.showTooltipWeeklyOnClick()
      } else if (this.checkInPeriod.periodType === 'nightly') {
        this.showTooltipNightlyOnClick()
      }
    },
    showTooltipWeeklyOnHover(date, periodDayType, text) {
      const countDaysBetweenCheckInCurrentDay = this.countDays(this.checkIn, date)
      const notOnPeriodDayType = date.getDay() !== periodDayType
      const isCheckInCheckOut = this.checkIn && this.checkOut
      const notCheckInNotPeriodDayType = !this.checkIn && notOnPeriodDayType
      const isCheckInNotCheckOut = this.checkIn && !this.checkOut
      const isNotBetweenCheckInAndCheckOut = !this.validateDateBetweenTwoDates(this.checkIn, this.checkOut, date)
      const notAllowDaysBetweenCheckInAndNextValidDate =
        this.hoveringPeriod.nextValidDate &&
        this.validateDateBetweenTwoDates(this.checkIn, this.hoveringPeriod.nextValidDate, this.hoveringDate) &&
        this.dateFormater(this.checkIn) !== this.dateFormater(this.hoveringDate) &&
        this.dateFormater(this.hoveringPeriod.nextValidDate) !== this.dateFormater(this.hoveringDate)
      const hasHalfDayOnWeeklyPeriod =
        Object.keys(this.checkIncheckOutHalfDay).length > 0 &&
        this.checkIncheckOutHalfDay[this.dateFormater(date)] &&
        this.checkIncheckOutHalfDay[this.dateFormater(date)].checkIn

      // Show tooltip on not-allowed day
      if (notCheckInNotPeriodDayType) {
        this.showCustomTooltip = true
        this.customTooltip = text
      } else {
        this.showCustomTooltip = false
        this.customTooltip = ''
      }

      // Show tooltip when CheckIn
      if (isCheckInNotCheckOut) {
        const nextDayValid = this.addDays(this.checkIn, this.minNightCount)
        const isDateAfterMinimumDuration = this.getDayDiff(date, nextDayValid) <= 0

        if (isDateAfterMinimumDuration && notOnPeriodDayType) {
          this.showCustomTooltip = true
          this.customTooltip = text
        } else if (notOnPeriodDayType || notAllowDaysBetweenCheckInAndNextValidDate) {
          if (this.checkInPeriod && this.checkInPeriod.periodType === 'nightly') {
            this.showCustomTooltip = false
            this.customTooltip = ''
          } else {
            // Show default message on currentDay
            const night = this.pluralize(this.minNightCount, 'week')

            this.showCustomTooltip = true
            this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
              minNightInPeriod: this.minNightCount / 7,
              night,
            })
          }
        } else if (hasHalfDayOnWeeklyPeriod) {
          // Show the correct wording in comparison to periodType of this.checkInPeriod equal to "nightly" / "weekly"
          if (this.checkInPeriod.periodType !== 'nightly') {
            this.customTooltip = `${countDaysBetweenCheckInCurrentDay / 7} ${this.pluralize(
              this.minNightCount,
              'week',
            )}`
          } else if (this.checkInPeriod.periodType === 'nightly') {
            this.customTooltip = `${countDaysBetweenCheckInCurrentDay} ${
              countDaysBetweenCheckInCurrentDay !== 1 ? this.i18n.nights : this.i18n.night
            }`
          }
        } else {
          // Clean tooltip
          this.showCustomTooltip = false
          this.customTooltip = ''
        }
        // Show tooltip when CheckIn & CheckOut on all the days that are not between checkIn and CheckOut
      } else if (isCheckInCheckOut && notOnPeriodDayType && isNotBetweenCheckInAndCheckOut) {
        this.showCustomTooltip = true
        this.customTooltip = text
      }
    },
    showTooltipWeeklyOnClick() {
      const night = this.pluralize(this.minNightCount, 'week')

      this.showCustomTooltip = true
      this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
        minNightInPeriod: this.minNightCount / 7,
        night,
      })
    },
    showTooltipNightlyOnHover(date) {
      if (this.checkIn && !this.checkOut) {
        const nextDayValid = this.addDays(this.checkIn, this.minNightCount)
        const isDateAfterMinimumDuration = this.getDayDiff(date, nextDayValid) <= 0
        const countOfDays = this.countDays(this.checkIn, date)
        const night = this.pluralize(Math.max(this.minNightCount, countOfDays))

        if (!isDateAfterMinimumDuration) {
          const minNightInPeriod = this.hoveringPeriod.minimumDuration

          this.showCustomTooltip = true
          this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
            minNightInPeriod,
            night,
          })
        } else {
          this.customTooltip = `${countOfDays} ${night}`
        }
      } else {
        this.customTooltip = ''
      }
    },
    showTooltipNightlyOnClick() {
      const minNightInPeriod = this.hoveringPeriod.minimumDuration
      const night = this.pluralize(this.minNightCount)

      this.showCustomTooltip = true
      this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, { minNightInPeriod, night })
    },
    createHalfDayTooltip(date) {
      this.customTooltipHalfday = ''
      const formatedHoveringDate = this.dateFormater(date)

      if (this.checkIncheckOutHalfDay[formatedHoveringDate]) {
        this.showCustomTooltip = true

        if (this.checkIncheckOutHalfDay[formatedHoveringDate].checkIn) {
          this.customTooltipHalfday = this.i18n.tooltip.halfDayCheckOut
        } else if (this.checkIncheckOutHalfDay[formatedHoveringDate].checkOut) {
          this.customTooltipHalfday = this.i18n.tooltip.halfDayCheckIn
        }
      }
    },
    completeTrad(translation, keys) {
      let newT = translation
      const keysTranslations = Object.keys(keys)

      keysTranslations.forEach((key) => {
        newT = newT.replace(`%{${key}}`, keys[key])
      })

      return newT
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
    handleWindowResize() {
      if (window.innerWidth < 480) {
        this.screenSize = 'smartphone'
      } else if (window.innerWidth >= 480 && window.innerWidth < 768) {
        this.screenSize = 'tablet'
      } else if (window.innerWidth >= 768) {
        this.screenSize = 'desktop'
      }

      return this.screenSize
    },
    onElementHeightChange(el, callback) {
      let lastHeight = el.clientHeight
      let newHeight = lastHeight
      const newEl = el

      ;(function run() {
        newHeight = el.clientHeight

        if (lastHeight !== newHeight) {
          callback()
        }

        lastHeight = newHeight

        if (newEl.onElementHeightChangeTimer) {
          clearTimeout(el.onElementHeightChangeTimer)
        }

        newEl.onElementHeightChangeTimer = setTimeout(run, 1000)
      })()
    },
    emitHeighChangeEvent() {
      this.$emit('height-changed')
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
      this.showCustomTooltip = false
      this.hoveringPeriod = {}
      this.checkInPeriod = {}
      this.createHalfDayDates(this.baseHalfDayDates)
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

      if (!this.isDesktop || this.showSingleMonth) {
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
    createHalfDayDates(_baseHalfDayDates) {
      let sortedDates = []
      const checkIncheckOutHalfDay = {}
      const baseHalfDayDates = [..._baseHalfDayDates]

      // Sorted disabledDates
      baseHalfDayDates.sort((a, b) => {
        const aa = a.split('/').reverse().join()
        const bb = b.split('/').reverse().join()

        // eslint-disable-next-line no-nested-ternary
        return aa < bb ? -1 : aa > bb ? 1 : 0
      })

      if (this.sortBookings.length === 0) {
        for (let i = 0; i < baseHalfDayDates.length; i++) {
          const newDate = baseHalfDayDates[i]

          if (this.halfDay) {
            const newDateIncrementOne = baseHalfDayDates[i + 1]

            if (i === 0) {
              checkIncheckOutHalfDay[newDate] = {
                checkIn: true,
              }
            }

            if (
              !checkIncheckOutHalfDay[newDate] &&
              baseHalfDayDates[i + 1] &&
              this.getDayDiff(newDate, newDateIncrementOne) > 1
            ) {
              checkIncheckOutHalfDay[newDate] = {
                checkOut: true,
              }
              checkIncheckOutHalfDay[newDateIncrementOne] = {
                checkIn: true,
              }
            }

            if (i === baseHalfDayDates.length - 1) {
              checkIncheckOutHalfDay[baseHalfDayDates[baseHalfDayDates.length - 1]] = {
                checkOut: true,
              }
            }
          }

          sortedDates[i] = baseHalfDayDates[i]
        }
      } else {
        this.sortBookings.forEach((booking) => {
          checkIncheckOutHalfDay[booking.checkInDate] = {
            checkIn: true,
          }
          checkIncheckOutHalfDay[booking.checkOutDate] = {
            checkOut: true,
          }
        })
      }

      if (this.halfDay) {
        const halfDays = Object.keys(checkIncheckOutHalfDay)

        sortedDates = sortedDates.filter((date) => !halfDays.includes(date))
      }

      sortedDates = sortedDates.map((date) => new Date(date))
      this.sortedDisabledDates = sortedDates.sort((a, b) => a - b)
      this.checkIncheckOutHalfDay = checkIncheckOutHalfDay
      this.$emit('handle-checkin-checkout-half-day', this.checkIncheckOutHalfDay)
      /**
       * @deprecated since v4.0.0 beta 11
       */
      this.$emit('handleCheckinCheckoutHalfDay', this.checkIncheckOutHalfDay)
    },
  },
}
</script>
