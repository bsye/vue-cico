<template>
  <div class="cico__dummy-wrapper-scroll">
    <div class="cico__dummy-wrapper-input-wrapper">
      <span
        v-if="get(i18n, 'activity.filter.checkOut')"
        v-show="showExtendedPlaceholder"
        class="cico__dummy-wrapper-arrival"
      >
        {{ get(i18n, 'activity.filter.checkIn') }}
      </span>
      <DateInputCheckIn
        :is-open="isOpen"
        :toggle-datepicker="toggleDatepicker"
        :i18n="i18n"
        :input-size="inputSize"
        :checkinFieldFormat="checkinFieldFormat"
        :checkIn="checkIn"
        :checkOut="checkOut"
        :class="{ focused: !checkIn && isOpen }"
      />
    </div>
    <DateInputDivider :input-size="inputSize" v-if="showExtendedPlaceholder" />
    <div class="cico__dummy-wrapper-input-wrapper departure">
      <span
        v-if="get(i18n, 'activity.filter.checkOut')"
        v-show="showExtendedPlaceholder"
        class="cico__dummy-wrapper-departure"
      >
        {{ get(i18n, 'activity.filter.checkOut') }}
      </span>
      <DateInputCheckOut
        v-if="showExtendedPlaceholder"
        :is-open="isOpen"
        :toggle-datepicker="toggleDatepicker"
        :i18n="i18n"
        :input-size="inputSize"
        :checkoutFieldFormat="checkoutFieldFormat"
        :checkIn="checkIn"
        :checkOut="checkOut"
        :class="{ focused: !checkIn && isOpen }"
      />
    </div>
  </div>
</template>
<script>
import get from 'lodash.get'
import DateInputCheckOut from './DateInputCheckOut.vue'
import DateInputCheckIn from './DateInputCheckIn.vue'
import DateInputDivider from './DateInputDivider.vue'
import helpers from '../src/helpers'

export default {
  name: 'DateInputs',
  components: {
    DateInputCheckIn,
    DateInputCheckOut,
    DateInputDivider,
  },

  props: {
    checkIn: {
      type: [Date, null],
      default: null,
    },

    checkinFieldFormat: {
      type: String,
    },

    checkoutFieldFormat: {
      type: String,
    },

    checkOut: {
      type: [Date, null],
      default: null,
    },

    isOpen: {
      type: Boolean,
      rrequired: true,
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

  data() {
    return {
      inputWidth: null,
    }
  },

  computed: {
    inputSize() {
      if (this.inputWidth >= 300) return 'long'
      if (this.inputWidth < 300 && this.inputWidth > 225) return 'short'

      return 'extra-short'
    },

    showExtendedPlaceholder() {
      return !(this.checkIn === null && this.inputSize !== 'long')
    },
  },

  async mounted() {
    this.inputWidth = this.$parent.$refs.cico__wrapper.clientWidth
    window.addEventListener('resize', () => {
      this.inputWidth = this.$parent.$refs.cico__wrapper.clientWidth
    })
  },

  methods: {
    get,
    ...helpers,
  },
}
</script>
