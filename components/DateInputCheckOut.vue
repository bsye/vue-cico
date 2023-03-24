<template>
  <button
    class="cico__input"
    @keyup.enter.stop.prevent="toggleDatepicker"
    data-testid="cicoInput"
    :class="inputClass"
    :tabindex="tabIndex"
  >
    {{ inputDate || get(i18n, 'activity.filter.action') }}
  </button>
</template>

<script>
import get from 'lodash.get'
import helpers from '../src/helpers'

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    toggleDatepicker: {
      type: Function,
      required: true,
    },
    i18n: {
      type: Object,
      required: true,
    },
    inputSize: {
      type: String,
      required: true,
    },
    checkoutFieldFormat: {
      type: String,
    },
    checkIn: {
      type: [Date, null],
      default: null,
    },
    checkOut: {
      type: [Date, null],
      default: null,
    },
  },
  computed: {
    inputClass() {
      return {
        'cico__input--is-active': this.isOpen && this.inputDate == null,
      }
    },

    inputDate() {
      if (this.checkOut === null) return null

      if (this.checkoutFieldFormat) return helpers.dateFormatter(this.checkOut, this.checkoutFieldFormat)

      if (this.inputSize === 'long') return helpers.dateFormatter(this.checkOut, 'ddd DD MMM')
      if (this.inputSize === 'short') return helpers.dateFormatter(this.checkOut, 'DD MMM')

      return helpers.dateFormatter(this.checkOut, 'DD MMM')
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
