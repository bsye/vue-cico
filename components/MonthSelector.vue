<template>
  <div class="cico__months-selector">
    <div :style="translateMonths()">
      <button
        @click="index <= maxMonth ? $emit('month-selected', month.days[15].date) : null"
        v-for="(month, index) in months"
        :key="getUniqueKey(month)"
        :class="{
          'cico__months-selector--disabled': index > maxMonth,
          'cico__months-selector--current': index === activeMonthIndex,
          'cico__months-selector--next': index === activeMonthIndex + 1,
        }"
      >
        <p v-if="getIsNewYear(month)">
          {{ formatMonth(month, 'YYYY') }}
        </p>
        <span>
          {{ formatMonth(month, 'MMM') }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import get from 'lodash.get'
import Helpers from '../src/helpers'

export default {
  props: {
    minDate: {
      type: Date,
      required: true,
    },
    maxDate: {
      type: Date,
      required: true,
    },
    firstDayOfWeek: {
      type: Number,
      required: true,
    },
    activeMonthIndex: {
      type: Number,
      required: true,
    },
  },

  computed: {
    maxMonth() {
      return this.getMonthDiff(this.minDate, this.maxDate)
    },

    months() {
      const months = []
      let { minDate } = this

      for (let i = 0; i < this.maxMonth + 12; i++) {
        months.push(this.createMonth(minDate))
        minDate = this.getNextMonth(new Date(minDate))
      }

      return months
    },
  },

  methods: {
    ...Helpers,
    get,

    translateMonths() {
      let translateX = 0

      if (this.activeMonthIndex > 1) translateX = (this.activeMonthIndex - 2) * -50

      return {
        transform: `translateX(${translateX}px)`,
      }
    },

    getUniqueKey(month) {
      return month.days[15].date.getTime()
    },

    getIsNewYear(month) {
      return month.days[15].date.getMonth() === 0
    },

    formatMonth(month, format) {
      return this.dateFormatter(month.days[15].date, format)
    },

    createMonth(date) {
      const firstDay = this.getFirstDay(date, this.firstDayOfWeek)
      const month = {
        days: [],
      }

      for (let i = 0; i < 42; i++) {
        month.days.push({
          date: this.addDays(firstDay, i),
          belongsToThisMonth: this.addDays(firstDay, i).getMonth() === date.getMonth(),
        })
      }

      return month
    },
  },
}
</script>

<style lang="scss" scoped>
.cico__months-selector {
  overflow: hidden;
  padding-top: 16px;
  padding-bottom: 12px;

  > div {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    justify-content: space-between;
    //   width: 100%;
    cursor: pointer;
    align-items: flex-end;
  }

  button {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    transition: all 0s cubic-bezier(0.4, 0, 0.2, 1);

    p {
      font-size: 8px;
      font-weight: bold;
    }

    span {
      display: block;
      min-width: 50px;
      font-weight: 500;
      padding-right: 10px;
      padding-left: 10px;
      padding-top: 4px;
      padding-bottom: 5px;
      border-radius: 100px;

      &:hover {
        background-color: var(--primary-color-light);
      }
    }
  }

  .cico__months-selector--current {
    span {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .cico__months-selector--next {
    span {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .cico__months-selector--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .cico__months-selector--current,
  .cico__months-selector--next {
    span {
      color: var(--white);
      background-color: var(--primary-color);

      &:hover {
        background-color: var(--primary-color);
      }
    }
  }
}
</style>
