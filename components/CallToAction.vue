<template>
  <div class="cico__cta-panel">
    <h4 v-if="!checkIn" class="cico__cta-panel-title">
      {{ get(i18n, 'checkInCheckOut.checkIn') }}
    </h4>
    <h4 v-else-if="!checkOut" class="cico__cta-panel-title">
      {{ get(i18n, 'checkInCheckOut.checkOut') }}
    </h4>
    <h4 v-else class="cico__cta-panel-title">
      {{ get(i18n, 'checkInCheckOut.yourDates') }}
    </h4>

    <p v-if="!checkIn" class="cico__cta-info">
      {{ get(i18n, 'checkInCheckOut.stayLongerOne') }}
    </p>

    <p v-if="checkIn" class="cico__nights-info">
      <span v-if="checkIn" class="cico__checkin">
        {{ dateFormatter(checkIn, 'ddd DD MMM.') }}
      </span>
      <span v-else>
        {{ get(i18n, 'activity.calendar.checkIn') }}
      </span>

      <span v-if="!checkOut && validHoveredDate && checkIn" class="cico__checkout">
        {{ `- ${dateFormatter(validHoveredDate, 'ddd DD MMM.')}` }}
      </span>
      <span v-else-if="checkOut" class="cico__checkout">
        {{ `- ${dateFormatter(checkOut, 'ddd DD MMM.')} ` }}
      </span>
      <span v-else class="cico__checkout"> {{ '-' }} {{ get(i18n, 'activity.calendar.checkOut') }} </span>

      <template>
        <span v-if="extraNights < 1" class="cico__nights">
          ({{ `${minNights}` }} {{ get(i18n, 'checkInCheckOut.nightsIncluded') }})
        </span>
      </template>

      <span class="cico__travel-dates">
        <template v-if="extraNights >= 1">
          ({{ ` ${nightsCount}` }}
          <span v-if="nightsCount > 1">{{ get(i18n, 'activity.filter.nights') }} {{ '-' }}</span>
          <span v-else>{{ get(i18n, 'activity.filter.night') }} </span>
        </template>
        <template v-if="extraNights >= 1">
          <span>
            {{ ` ${minNights}` }}
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
import helpers from '../src/helpers'

export default {
  props: {
    i18n: Object,

    minNights: {
      type: Number,
      default: 0,
    },

    validHoveredDate: {
      type: Date,
    },

    checkIn: Date,
    checkOut: Date,
  },

  computed: {
    nightsCount() {
      if (!this.checkIn) return 0

      if (this.checkOut) return this.countDays(this.checkIn, this.checkOut)
      if (this.validHoveredDate) return this.countDays(this.checkIn, this.validHoveredDate)

      return 0
    },

    extraNights() {
      return this.nightsCount - this.minNights
    },
  },

  methods: {
    get,
    ...helpers,
  },
}
</script>

<style></style>
