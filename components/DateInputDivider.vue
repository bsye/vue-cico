<template>
  <div>
    <IconArrow v-show="!isInputShort" />
    <span v-show="isInputShort"> - </span>
  </div>
</template>

<script>
import IconArrow from './icons/IconArrow.vue'

export default {
  name: 'DateInputDivider',
  components: {
    IconArrow,
  },
  props: {
    inputSize: {
      type: String,
      required: true,
    },
  },
  computed: {
    isInputShort() {
      return this.inputSize === 'extra-short'
    },
  },
}
</script>

<style scoped>
span {
  white-space: pre;
}
</style>
