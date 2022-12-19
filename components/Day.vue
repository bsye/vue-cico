<template>
  <div>
    <div
      class="cico__month-day"
      @click.prevent.stop="dayClicked($event, date)"
      :class="[
        isDayNotAvailable,
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
    belongsToThisMonth: {
      type: Boolean,
      default: false,
    },
    checkIn: {
      type: Date,
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
    hoveringDate: {
      type: Date,
    },
    minNightCount: {
      type: Number,
      default: 0,
    },
    month: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
    },
  },
  computed: {
    isDayNotAvailable() {
      if (!this.disabledDates) return false

      if (this.disabledDates.find((disabled) => this.compareDay(disabled, this.date) === 0)) {
        return 'disabled__not-available'
      }

      return null
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
        !this.isDayNotAvailable,
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
