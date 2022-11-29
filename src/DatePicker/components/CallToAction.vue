<template>
  <div class="vhd__datepicker__cta-panel">
    <h4 v-if="i18n.checkInCheckOut && i18n.checkInCheckOut.checkIn" class="vhd__datepicker__cta-panel-title">
      {{ i18n.checkInCheckOut.checkIn }}
    </h4>

    <p v-if="i18n.checkInCheckOut && i18n.checkInCheckOut.stayLongerOne" class="vhd__datepicker__cta-info">
      {{ i18n.checkInCheckOut.stayLongerOne }}
    </p>

    <p class="vhd__datepicker__nights-info">
      <span class="vhd__datepicker__checkin">
        {{ nightsIn }}
      </span>

      <span v-if="nightsOut" class="vhd__datepicker__checkout">
        {{ `\u00A0${nightsOut}\u00A0` }}
      </span>
      <span
        v-else-if="i18n.activity && i18n.activity.calendar && i18n.activity.calendar.checkOut"
        class="vhd__datepicker__checkout"
      >
        {{ i18n.activity.calendar.checkOut }}
      </span>

      <span v-if="!extraNights" class="vhd__datepicker__nights">
        {{ `\u00A0${includedNights}` }}
      </span>

      <span class="vhd__datepicker__travel-dates">
        {{ `\u00A0${nightsTotal}` }}
        <span v-if="i18n.checkInCheckOut && i18n.checkInCheckOut.nightsIncluded">
          {{ `\u00A0${includedNights}` + i18n.checkInCheckOut.nightsIncluded }}
        </span>
        <span v-if="i18n.checkInCheckOut && i18n.checkInCheckOut.extraNight" class="vhd__datepicker__extra-nights">
          - {{ extraNights + i18n.checkInCheckOut.extraNight }}
        </span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    i18n: Object,
    includedNights: Number,
    nightsIn: String,
    nightsOut: String,
    nightsTotal: Number,
  },

  computed: {
    extraNights() {
      return this.nightsTotal - this.includedNights
    },
  },
}
</script>

<style></style>
