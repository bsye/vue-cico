<template>
  <button
    class="cico__input"
    @keyup.enter.stop.prevent="toggleDatepicker"
    data-qa="cicoInput"
    :class="inputClass"
    :tabindex="tabIndex"
  >
    {{ text }}
  </button>
</template>

<script>
import get from 'lodash.get'

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    inputDate: {
      type: String,
      default: null,
    },
    inputDateType: {
      type: String,
      default: 'check-in',
    },
    singleDaySelection: {
      type: Boolean,
      default: false,
    },
    toggleDatepicker: {
      type: Function,
      required: true,
    },
    i18n: {
      type: Object,
      required: true,
    },
  },
  computed: {
    inputClass() {
      return {
        'cico__input--is-active': this.isOpen && this.inputDate == null,
        'cico__input--single-date': this.singleDaySelection,
      }
    },
    text() {
      let plain = null

      if (this.inputDateType === 'check-in') plain = this.get(this.i18n, 'activity.filter.action')
      if (this.inputDateType === 'check-out') plain = this.get(this.i18n, 'activity.filter.action')

      return this.inputDate || plain
    },
    tabIndex() {
      return this.inputDateType === 'check-in' ? 0 : -1
    },
  },

  methods: {
    get,
  },
}
</script>
