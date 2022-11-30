<template>
  <div class="vhd__datepicker__cta-panel">
    <h4 v-if="get(i18n, 'checkInCheckOut.checkIn')" class="vhd__datepicker__cta-panel-title">
      {{ i18n.checkInCheckOut.checkIn }}
    </h4>

    <p v-if="get(i18n, 'checkInCheckOut.stayLongerOne')" class="vhd__datepicker__cta-info">
      {{ i18n.checkInCheckOut.stayLongerOne }}
    </p>

    <p class="vhd__datepicker__nights-info">
      <span class="vhd__datepicker__checkin">
        {{ nightsIn }}
      </span>

      <span v-if="nightsOut" class="vhd__datepicker__checkout">
        {{ `\u00A0${nightsOut}\u00A0` }}
      </span>
      <span v-else-if="get(i18n, 'activity.calendar.checkOut')" class="vhd__datepicker__checkout">
        {{ i18n.activity.calendar.checkOut }}
      </span>

      <template v-if="get(i18n, 'checkInCheckOut.nightsIncluded')">
        <span v-if="extraNights < 1" class="vhd__datepicker__nights">
          {{ `\u00A0${includedNights}` + i18n.checkInCheckOut.nightsIncluded }}
        </span>
      </template>

      <span class="vhd__datepicker__travel-dates">
        {{ `\u00A0${nightsTotal}` }}
        <span v-if="get(i18n, 'checkInCheckOut.nightsIncluded')">
          {{ `\u00A0${includedNights}` + i18n.checkInCheckOut.nightsIncluded }}
        </span>
        <span v-if="get(i18n, 'checkInCheckOut.extraNight')" class="vhd__datepicker__extra-nights">
          - {{ extraNights + i18n.checkInCheckOut.extraNight }}
        </span>
      </span>
    </p>
  </div>
</template>

<script>
import get from 'lodash.get'

export default {
  props: {
    i18n: Object,

    includedNights: {
      type: Number,
      default: 0,
    },

    nightsIn: String,
    nightsOut: String,
    nightsTotal: Number,
  },

  computed: {
    extraNights() {
      return this.nightsTotal - this.includedNights
    },
  },

  methods: {
    get,
  },
}
</script>

<style></style>
