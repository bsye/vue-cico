<template>
  <div class="vhd__datepicker__cta-panel">
    <h4 class="vhd__datepicker__cta-panel-title">
      {{ get(i18n, 'checkInCheckOut.checkIn') }}
    </h4>

    <p class="vhd__datepicker__cta-info">
      {{ get(i18n, 'checkInCheckOut.stayLongerOne') }}
    </p>

    <p class="vhd__datepicker__nights-info">
      <span v-if="nightsIn" class="vhd__datepicker__checkin">
        {{ nightsIn }}
      </span>
      <span v-else>
        {{ get(i18n, 'activity.calendar.checkIn') }}
      </span>

      <span v-if="nightsOut" class="vhd__datepicker__checkout">
        {{ ` ${nightsOut} ` }}
      </span>
      <span v-else class="vhd__datepicker__checkout">
        {{ get(i18n, 'activity.calendar.checkOut') }}
      </span>

      <template>
        <span v-if="extraNights < 1" class="vhd__datepicker__nights">
          {{ ` ${includedNights}` }}
          {{ get(i18n, 'checkInCheckOut.nightsIncluded') }}
        </span>
      </template>

      <span class="vhd__datepicker__travel-dates">
        <template v-if="nightsTotal > 0">
          {{ ` ${nightsTotal}` }}
          <span v-if="nightsTotal > 1">
            {{ get(i18n, 'activity.filter.nights') }}
          </span>
          <span v-else>{{ get(i18n, 'activity.filter.night') }}</span>
        </template>
        <div v-if="extraNights >= 1">
          <span>
            {{ ` ${includedNights}` }}
            {{ get(i18n, 'checkInCheckOut.nightsIncluded') }}
          </span>
          <span class="vhd__datepicker__extra-nights">
            - {{ extraNights }}
            {{ get(i18n, 'checkInCheckOut.extraNight') }}
          </span>
        </div>
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
