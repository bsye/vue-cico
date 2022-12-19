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
          :checkIn="checkIn"
          :checkOut="checkOut"
          :disabledDates="disabledDates"
          :date="day.date"
          :belongsToThisMonth="day.belongsToThisMonth"
          :hoveringDate="hoveringDate"
          :minNightCount="minNightCount"
          :maxNights="maxNights"
          :month="month"
          :options="options"
          @clear-selection="clearSelection"
          @booking-clicked="handleBookingClicked"
          @day-clicked="handleDayClick"
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

    handleBookingClicked(event, date, currentBooking) {
      this.$emit('booking-clicked', event, date, currentBooking)
    },

    handleDayClick(event, date, formatDate, resetCheckin) {
      this.$emit('day-clicked', event, date, formatDate, resetCheckin)
    },
  },
}
</script>

<style></style>
