<template>
  <div ref="datepickerMonth" class="cico__month" @mouseenter="enterMonth($event)">
    <p class="cico__month-name">
      {{ monthName }}
    </p>

    <week-row :i18n="i18n" :weekKey="weekKey" :firstDayOfWeek="firstDayOfWeek" />
    <div class="cico__square-wrapper">
      <div
        class="cico__square"
        v-for="(day, dayIndex) in month.days"
        :key="`${dayKey}-${dayIndex}`"
        @mouseenter="enterDay($event, day)"
      >
        <Day
          :minDate="minDate"
          :maxDate="maxDate"
          :checkIn="checkIn"
          :checkOut="checkOut"
          :disabledDates="disabledDates"
          :date="day.date"
          :belongsToThisMonth="day.belongsToThisMonth"
          :hoveringDate="hoveringDate"
          :disabledWeekDays="disabledWeekDays"
          :minNightCount="minNightCount"
          :maxNights="maxNights"
          :month="month"
          :prices="prices"
          :options="options"
          @clear-selection="clearSelection"
          @day-clicked="handleDayClick"
          @valid-day-hovered="validDayHovered"
        />
      </div>
    </div>
  </div>
</template>

<script>
import fecha from 'fecha'
import Day from './Day.vue'
import WeekRow from './WeekRow.vue'

export default {
  name: 'Month',
  components: {
    Day,
    WeekRow,
  },
  props: {
    month: {
      type: Object,
      required: true,
    },
    disabledWeekDays: {
      type: Object,
    },
    dayKey: {
      type: Number,
      required: true,
    },
    weekKey: {
      type: Number,
      required: true,
    },
    firstDayOfWeek: {
      type: Number,
      required: true,
    },
    checkIn: {
      type: Date,
    },
    checkOut: {
      type: Date,
    },
    hoveringDate: {
      type: Date,
    },
    i18n: {
      type: Object,
      default: () => ({}),
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
    prices: {
      type: Array,
    },
    minNightCount: {
      type: Number,
      default: 0,
    },
    maxNights: {
      type: [Number, null],
      default: null,
    },
    options: {
      type: Object,
    },
    disabledDates: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    monthName() {
      return this.getMonth(this.month.days[15].date)
    },
  },
  methods: {
    getMonth(date) {
      const month = 'MMMM'
      const year = 'YYYY'
      const format = `${month} ${year}`

      return fecha.format(date, format).trim()
    },

    enterDay(event, day) {
      this.$emit('enter-day', event, day)
    },

    enterMonth(event) {
      this.$emit('enter-month', event, this.month)
    },

    clearSelection() {
      this.$emit('clear-selection')
    },

    handleDayClick(event, date) {
      this.$emit('day-clicked', event, date)
    },

    validDayHovered(date) {
      this.$emit('valid-day-hovered', date)
    },
  },
}
</script>

<style></style>
