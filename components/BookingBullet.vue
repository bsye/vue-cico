<template>
  <i class="cico__parent-bullet">
    <i
      v-if="previousBooking && duplicateBookingDates.includes(formatDate)"
      class="cico__bullet"
      :style="previousBooking.style"
      :class="[
        {
          cico__checkInCheckOut: duplicateBookingDates.includes(formatDate),
        },
      ]"
    />
    <i
      v-if="previousBooking && duplicateBookingDates.includes(formatDate)"
      class="cico__pipe cico__checkInCheckOut"
      :style="previousBooking.style"
    />
    <i
      v-if="currentBooking && (currentBooking.checkInDate === formatDate || currentBooking.checkOutDate === formatDate)"
      class="cico__bullet"
      :style="currentBooking.style"
      :class="[
        {
          cico__checkIn: currentBooking.checkInDate === formatDate,
          cico__checkOut: currentBooking.checkOutDate === formatDate,
        },
      ]"
    />
    <i
      v-if="currentBooking"
      class="cico__pipe"
      :class="[
        {
          cico__checkIn: currentBooking.checkInDate === formatDate,
          cico__checkOut: currentBooking.checkOutDate === formatDate,
        },
      ]"
      :style="currentBooking.style"
    />
  </i>
</template>

<script>
export default {
  name: 'BookingBullet',
  props: {
    currentBooking: {
      type: Object,
      default: () => ({}),
    },
    duplicateBookingDates: {
      type: Array,
      default: () => [],
    },
    formatDate: {
      type: String,
      default: '',
    },
    previousBooking: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
