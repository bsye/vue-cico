<template>
  <div class="cico__week-row">
    <div v-for="(name, ix) in dayNames" :key="`${weekKey}-${ix}`" class="cico__week-name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import get from 'lodash.get'
import helpers from '../src/helpers'

export default {
  name: 'WeekRow',
  props: {
    i18n: {
      type: Object,
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
  },
  computed: {
    weekdaysShort() {
      return this.shortenArrayOfStrings(
        [
          this.get(this.i18n, 'date.weekdays.short.sun'),
          this.get(this.i18n, 'date.weekdays.short.mon'),
          this.get(this.i18n, 'date.weekdays.short.tue'),
          this.get(this.i18n, 'date.weekdays.short.wed'),
          this.get(this.i18n, 'date.weekdays.short.thu'),
          this.get(this.i18n, 'date.weekdays.short.fri'),
          this.get(this.i18n, 'date.weekdays.short.sat'),
        ],
        2,
      )
    },

    dayNames() {
      return [
        ...this.weekdaysShort.slice(this.firstDayOfWeek),
        ...this.weekdaysShort.slice(0, this.firstDayOfWeek),
      ].slice(0, 7)
    },
  },

  methods: {
    get,
    ...helpers,
  },
}
</script>
