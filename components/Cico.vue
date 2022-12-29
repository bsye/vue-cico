<template>
  <div class="cico__wrapper cico__root" :ref="`DatePicker-${hash}`">
    <div class="cico__close-button cico__hide-on-desktop" v-if="isOpen" @click="hideDatepicker()">
      <i>+</i>
    </div>
    <div @click="toggleDatepicker()" class="cico__dummy-wrapper">
      <IconCalendar />
      <div class="cico__dummy-wrapper-scroll">
        <div class="cico__dummy-wrapper-input-wrapper">
          <span v-if="get(i18n, 'activity.filter.checkOut')" class="cico__dummy-wrapper-arrival">
            {{ get(i18n, 'activity.filter.checkIn') }}
          </span>
          <date-input
            :i18n="i18n"
            :input-date="responsiveFormatter(this.checkIn, this.fieldsFormat)"
            input-date-type="check-in"
            :is-open="isOpen"
            :toggle-datepicker="toggleDatepicker"
          />
        </div>
        <IconArrow />
        <div class="cico__dummy-wrapper-input-wrapper departure">
          <span v-if="get(i18n, 'activity.filter.checkOut')" class="cico__dummy-wrapper-departure">
            {{ get(i18n, 'activity.filter.checkOut') }}
          </span>
          <date-input
            :i18n="i18n"
            :input-date="responsiveFormatter(this.checkOut, this.fieldsFormat)"
            input-date-type="check-out"
            :is-open="isOpen"
            :toggle-datepicker="toggleDatepicker"
          />
        </div>
      </div>
      <div class="cico__clear-button" tabindex="0" @click="clearSelection" v-show="showClearSelectionButton">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68" role="img" aria-label="x">
          <title>x</title>
          <path d="M6.5 6.5l55 55m0-55l-55 55" stroke="#000" fill="none" stroke-linecap="square" />
        </svg>
      </div>
    </div>
    <div
      class="cico"
      :class="{
        [position]: true,
        'cico--open': isOpen,
        'cico--closed': !isOpen,
      }"
    >
      <div v-if="isOpen" class="cico__inner">
        <CallToAction
          :included-nights="minNights"
          :nights-total="totalNights"
          :nights-in="dateFormatter(checkIn, 'ddd DD MMM.')"
          :nights-out="dateFormatter(checkOut, 'ddd DD MMM.')"
          :i18n="i18n"
        />
        <div class="cico__months">
          <div
            v-if="isDesktop"
            :class="{
              cico__header: isDesktop,
            }"
          >
            <button
              type="button"
              class="cico__month-button cico__month-button--prev"
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
              class="cico__month-button cico__month-button--next"
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
            :firstDayOfWeek="firstDayOfWeek"
            :checkIn="checkIn"
            :checkOut="checkOut"
            :hoveringDate="hoveringDate"
            :i18n="i18n"
            :minDate="minDate"
            :maxDate="maxDate"
            :minNightCount="minNights"
            :maxNights="maxNights"
            :disabledWeekDays="disabledWeekDays"
            :disabledDates="disabledDates"
            @clear-selection="clearSelection"
            @day-clicked="handleDayClick"
            @enter-day="enterDay"
            @enter-month="enterMonth"
          />
        </div>
        <MobileActions
          @reset="clearSelection()"
          @selected="mobileActionSelected()"
          :displayClearButton="displayClearButton"
          :isClearDisabled="!(checkIn || checkOut)"
          :isSelectDisabled="!checkIn || !checkOut"
          :i18n="i18n"
          v-if="!isDesktop"
        />
      </div>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import fecha from 'fecha'
import get from 'lodash.get'
import Month from './Month.vue'
import MobileActions from './MobileActions.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconArrow from './icons/IconArrow.vue'
import DateInput from './DateInput.vue'
import CallToAction from './CallToAction.vue'
import Helpers from '../src/helpers'
// eslint-disable-next-line import/no-named-as-default
import i18nDefaults from '../public/i18n/en'

export default {
  name: 'Cico',
  components: {
    Month,
    CallToAction,
    MobileActions,
    IconCalendar,
    IconArrow,
    DateInput,
  },
  props: {
    checkInDate: {
      type: [Date, null],
      default: null,
    },

    checkOutDate: {
      type: [Date, null],
      default: null,
    },

    closeOnClickOutside: {
      type: Boolean,
      default: true,
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

    displayClearButton: {
      type: Boolean,
      default: true,
    },

    outputFormat: {
      type: String,
      default: 'YYYY-MM-DD',
    },

    fieldsFormat: {
      type: [Object, String],
      default: () => {
        return {
          mobile: 'DD MMM',
          desktop: 'ddd DD MMM',
        }
      },
    },

    i18n: {
      type: Object,
      default: () => i18nDefaults,
    },

    minDate: {
      type: [Date, String],
      default() {
        return new Date()
      },
    },

    maxDate: {
      type: [Date, String, Number],
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

    position: {
      type: String,
      default: 'bottom',
    },
  },

  data() {
    return {
      activeMonthIndex: 0,
      checkIn: this.checkInDate,
      checkInMinNights: [],
      checkOut: this.checkOutDate,
      datepickerDayKey: 0,
      firstDayOfWeek: 0,
      datepickerMonthKey: 0,
      datepickerWeekKey: 0,
      dynamicNightCounts: null,
      hash: Date.now(),
      hoveringDate: null,
      months: [],
      open: false,
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

    isPreventedMaxMonth() {
      const lastIndexMonthAvailable = this.getMonthDiff(this.minDate, this.maxDate)

      return this.activeMonthIndex >= lastIndexMonthAvailable - 1
    },

    showClearSelectionButton() {
      return Boolean((this.checkIn || this.checkOut) && this.displayClearButton)
    },

    disabledWeekDays() {
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
      const disabledWeekDays = {
        sunday: disabledDays.includes(SUNDAY),
        monday: disabledDays.includes(MONDAY),
        tuesday: disabledDays.includes(TUESDAY),
        wednesday: disabledDays.includes(WEDNESDAY),
        thursday: disabledDays.includes(THURSDAY),
        friday: disabledDays.includes(FRIDAY),
        saturday: disabledDays.includes(SATURDAY),
      }

      return disabledWeekDays
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

    numberOfMonths() {
      if (this.isDesktop) return 2

      return 12
    },

    isDesktop() {
      return this.windowWidth > 767
    },
  },
  watch: {
    checkIn(newDate) {
      this.$emit('check-in-selected', this.dateFormatter(newDate, this.outputFormat))

      this.reRender()
    },

    checkOut(newDate) {
      if (this.checkOut !== null) {
        this.hoveringDate = null
        this.reRender()
      }

      this.$emit('check-out-selected', this.dateFormatter(newDate, this.outputFormat))
      this.reRender()
    },

    firstDayOfWeek() {
      const startDate = new Date(this.minDate)
      const offset = this.numberOfMonths + this.activeMonthIndex

      this.generateInitialMonths()

      for (let i = this.numberOfMonths; i < offset; i++) {
        this.createMonth(new Date(startDate.getFullYear(), startDate.getMonth() + i, 1))
      }

      this.reRender()
    },

    checkInDate(date) {
      this.setCheckIn(date)
    },

    checkOutDate(date) {
      this.setCheckOut(date)
    },

    i18n() {
      this.configureI18n()
    },

    disabledDates() {
      this.disabledDateIsCheckIn()
      this.disabledDateIsCheckOut()
      this.reRender()
    },
  },

  created() {
    this.configureI18n()
    this.generateInitialMonths()
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleResize)
    })

    document.addEventListener('click', this.handleClickOutside, false)
    document.addEventListener('keyup', this.escFunction, false)
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)

    document.removeEventListener('keyup', this.escFunction, false)
    document.removeEventListener('click', this.handleClickOutside)
  },

  methods: {
    ...Helpers,
    get,

    handleResize() {
      this.windowWidth = window.innerWidth
    },

    configureI18n() {
      fecha.setGlobalDateI18n({
        dayNames: this.weekdays,
        dayNamesShort: this.shortenArrayOfStrings(this.weekdaysShort, 3),
        monthNames: this.monthNames,
        monthNamesShort: this.shortenArrayOfStrings(this.monthNames, 3),
        amPm: ['am', 'pm'],
        // D is the day of the month, function returns something like...  3rd or 11th
        DoFn(D) {
          return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10]
        },
      })
    },

    mobileActionSelected() {
      this.isOpen = !this.isOpen
      this.$emit('search-mobile-triggered')
    },

    disabledDateIsCheckIn() {
      if (!this.checkIn) return null

      if (this.disabledDates.find((disabled) => this.compareDay(disabled, this.checkIn) === 0)) {
        this.clearSelection()
      }

      return null
    },

    disabledDateIsCheckOut() {
      if (!this.checkOut) return null

      if (this.disabledDates.find((disabled) => this.compareDay(disabled, this.checkOut) === 0)) {
        const { checkIn } = this

        this.clearSelection()
        this.checkIn = checkIn
      }

      return null
    },

    responsiveFormatter(date) {
      if (typeof this.fieldsFormat === 'string') return this.dateFormatter(date, this.fieldsFormat)

      if (this.isDesktop) {
        try {
          if (this.get(this.fieldsFormat, 'desktop')) return this.dateFormatter(date, this.fieldsFormat.desktop)
        } catch (error) {
          return this.dateFormatter(date, 'ddd DD MMM')
        }

        return this.dateFormatter(date, 'ddd DD MMM')
      }

      if (this.get(this.fieldsFormat, 'mobile'))
        try {
          return this.dateFormatter(date, this.fieldsFormat.mobile)
        } catch (error) {
          return this.dateFormatter(date, 'DD MMM')
        }

      return this.dateFormatter(date, 'DD MMM')
    },

    generateInitialMonths() {
      this.months = []

      if (
        this.checkIn &&
        (this.getMonthDiff(this.getNextMonth(new Date(this.minDate)), this.checkIn) > 0 ||
          this.getMonthDiff(this.minDate, this.checkIn) > 0)
      ) {
        this.createMonth(new Date(this.minDate))
        const monthCount = this.getMonthDiff(this.minDate, this.checkIn)
        let nextMonth = new Date(this.minDate)

        for (let i = 0; i <= monthCount; i++) {
          const tempNextMonth = this.getNextMonth(nextMonth)

          this.createMonth(tempNextMonth)
          nextMonth = tempNextMonth
        }

        if (this.checkOut && this.getMonthDiff(this.checkIn, this.checkOut) > 0) {
          this.createMonth(this.getNextMonth(nextMonth))
          this.activeMonthIndex = 1
        }

        this.activeMonthIndex += monthCount
      } else {
        let date = new Date(this.minDate)

        for (let i = 0; i < this.numberOfMonths; i++) {
          this.createMonth(date)
          date = this.getNextMonth(new Date(date))
        }
      }
    },

    escFunction(e) {
      const escTouch = 27

      if (e.keyCode === escTouch && this.isOpen && this.checkIn) {
        this.clearSelection()
      }
    },

    formatDate(date) {
      return this.dateFormatter(date, this.outputFormat)
    },

    enterMonth(event, month) {
      this.$emit('enter-month', month)
    },

    enterDay(event, day) {
      this.hoveringDate = day.date
      this.$emit('enter-day', day)
    },

    handleDayClick(event, date, formatDate, resetCheckin) {
      if (resetCheckin) {
        this.clearSelection()
        this.$nextTick(() => {
          this.handleDayClick(event, date, formatDate, false)
        })

        return
      }

      this.hoveringDate = null
      this.hoveringDate = date
      this.$emit('day-clicked', this.dateFormatter(date, this.outputFormat))

      if (this.checkIn == null) {
        this.checkIn = date

        return
      }

      if (this.checkIn && !this.checkOut) {
        this.checkOut = date
        this.$emit(
          'period-selected',
          this.dateFormatter(this.checkIn, this.outputFormat),
          this.dateFormatter(this.checkOut, this.outputFormat),
        )

        return
      }

      this.checkOut = null
      this.checkIn = date
    },

    handleClickOutside(event) {
      if (this.closeOnClickOutside === false) return
      const ignoreClickOnMeElement = this.$refs[`DatePicker-${this.hash}`]

      if (ignoreClickOnMeElement) {
        const isClickInsideElement = ignoreClickOnMeElement.contains(event.target)

        if (!isClickInsideElement) {
          this.autofillWithCheckOut()
          this.hideDatepicker()
        }
      }
    },

    autofillWithCheckOut() {
      if (!this.disabledDates)
        if (this.checkIn && !this.checkOut) {
          this.checkOut = this.addDays(this.checkIn, this.minNights)
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
      this.hoveringPeriod = {}
      this.reRender()
      this.$emit('clear-selection')
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
      if (this.activeMonthIndex < this.months.length - 2) {
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
