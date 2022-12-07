<template>
  <div class="cico__cta-panel">
    <h4 v-if="!nightsIn" class="cico__cta-panel-title">
      {{ get(i18n, 'checkInCheckOut.checkIn') }}
    </h4>
    <h4 v-else-if="!nightsOut" class="cico__cta-panel-title">
      {{ get(i18n, 'checkInCheckOut.checkOut') }}
    </h4>
    <h4 v-else class="cico__cta-panel-title">
      {{ get(i18n, 'checkInCheckOut.yourDates') }}
    </h4>

    <p v-if="!nightsIn" class="cico__cta-info">
      {{ get(i18n, 'checkInCheckOut.stayLongerOne') }}
    </p>

    <p v-if="nightsIn" class="cico__nights-info">
      <span v-if="nightsIn" class="cico__checkin">
        {{ nightsIn }}
      </span>
      <span v-else>
        {{ get(i18n, 'activity.calendar.checkIn') }}
      </span>

      <span v-if="nightsOut" class="cico__checkout">
        {{ `- ${nightsOut} ` }}
      </span>
      <span v-else class="cico__checkout"> {{ '-' }} {{ get(i18n, 'activity.calendar.checkOut') }} </span>

      <template>
        <span v-if="extraNights < 1" class="cico__nights">
          ({{ `${includedNights}` }} {{ get(i18n, 'checkInCheckOut.nightsIncluded') }})
        </span>
      </template>

      <span class="cico__travel-dates">
        <template v-if="extraNights >= 1">
          ({{ ` ${nightsTotal}` }}
          <span v-if="nightsTotal > 1">{{ get(i18n, 'activity.filter.nights') }} {{ '-' }}</span>
          <span v-else>{{ get(i18n, 'activity.filter.night') }} </span>
        </template>
        <template v-if="extraNights >= 1">
          <span>
            {{ ` ${includedNights}` }}
            {{ get(i18n, 'checkInCheckOut.included') }},
          </span>
          <span class="cico__extra-nights"> {{ extraNights }} {{ get(i18n, 'checkInCheckOut.extraNight') }} </span>)
        </template>
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
