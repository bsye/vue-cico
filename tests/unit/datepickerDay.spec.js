import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

import Day from '../../components/Day.vue'

describe('Day Component', () => {
  describe('isDayNotAvailable', () => {
    let wrapper
    let wrapper2
    let wrapper3

    beforeEach(() => {
      wrapper = shallowMount(Day, {
        propsData: {
          date: new Date('2022-12-12'),
        },
      })

      wrapper2 = shallowMount(Day, {
        propsData: {
          disabledDates: ['2022-12-23', '2022-12-24'],
          date: new Date('2022-12-24'),
        },
      })

      wrapper3 = shallowMount(Day, {
        propsData: {
          disabledDates: ['2022-12-23', '2022-12-24'],
          date: new Date('2022-12-30'),
        },
      })
    })

    it('should return null if there are no disabled dates', () => {
      expect(wrapper.vm.isDayNotAvailable).to.equal(null)
    })

    it('should return "disabled__not-available" if the day is in the disabled date array', () => {
      expect(wrapper2.vm.isDayNotAvailable).to.equal('disabled__not-available')
    })

    it('should return null if the day is not the disabled date array', () => {
      expect(wrapper3.vm.isDayNotAvailable).to.equal(null)
    })
  })

  describe('isAfterMaxNights', () => {
    let wrapper
    let wrapper2
    let wrapper3

    beforeEach(() => {
      wrapper = shallowMount(Day, {
        propsData: {
          date: new Date('2022-12-12'),
        },
      })

      wrapper2 = shallowMount(Day, {
        propsData: {
          checkIn: new Date('2022-12-27'),
          checkOut: new Date('2022-12-31'),
          date: new Date('2022-12-24'),
        },
      })

      wrapper3 = shallowMount(Day, {
        propsData: {
          checkIn: new Date('2022-12-27'),
          maxNights: 2,
          date: new Date('2022-12-30'),
        },
      })
    })

    it("should return null if there's no checkIn", () => {
      expect(wrapper.vm.isAfterMaxNights).to.equal(null)
    })

    it('should return null if there is a checkOut Date', () => {
      expect(wrapper2.vm.isAfterMaxNights).to.equal(null)
    })

    it("should return 'disabled__is-after-max-nights' if the date is after the maximum number of nights", () => {
      expect(wrapper3.vm.isAfterMaxNights).to.equal('disabled__is-after-max-nights')
    })
  })

  describe('dayNumber', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallowMount(Day, {
        propsData: {
          belongsToThisMonth: true,
          date: new Date('2022-12-12'),
        },
      })
    })

    it('should return the day number', () => {
      expect(wrapper.vm.dayNumber).to.equal('12')
    })
  })

  describe('isBeforeMinDate', () => {
    let wrapper
    let wrapper2

    beforeEach(() => {
      wrapper = shallowMount(Day, {
        propsData: {
          belongsToThisMonth: true,
          date: new Date('2022-12-12'),
        },
      })

      wrapper2 = shallowMount(Day, {
        propsData: {
          belongsToThisMonth: true,
          minDate: new Date('2022-12-29'),
          date: new Date('2022-12-30'),
        },
      })
    })

    it('should return "disabled__before-min-date" because it is before the min date which by default is the current day', () => {
      expect(wrapper.vm.isBeforeMinDate).to.equal('disabled__before-min-date')
    })

    it('should return null because the date is after the minDate', () => {
      expect(wrapper2.vm.isBeforeMinDate).to.equal(null)
    })
  })
})
