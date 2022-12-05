<template>
  <div class="vhd__datepicker-mobile-actions">
    <button
      @click="$emit('reset')"
      :class="{ disabled: isClearDisabled }"
      class="button no-margin expanded has-text-weight-semibold vhd__datepicker-mobile-action-reset"
    >
      {{ get(i18n, 'activity.filter.clear') }}
    </button>
    <button
      @click="$emit('selected')"
      :class="{ disabled: isSelectDisabled }"
      class="button primary no-margin expanded has-text-weight-semibold vhd__datepicker-mobile-action-select"
    >
      {{ get(i18n, 'cta.select') }}
    </button>
  </div>
</template>
<script>
import get from 'lodash.get'

export default {
  props: {
    i18n: {
      type: Object,
      required: true,
    },

    isSelectDisabled: {
      type: Boolean,
      required: true,
    },

    isClearDisabled: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    get,
  },
}
</script>
<style></style>
