import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import get from 'lodash.get'
import i18n from '../../public/i18n/en'
import helpers from '../../src/helpers'

import Cico from '../../components/Cico.vue'

describe('Cico Component', () => {
  const wrapper = mount(Cico, {
    propsData: {
      minNights: 3,
      maxNights: 20,
      minDate: new Date('2022-12-28'),
    },
  })

  it('should verify that the component is mounted', async () => {
    expect(wrapper.html()).to.not.equal(null)
  })

  it('should verify that the calendar opens correctly', async () => {
    await wrapper.find('.cico__dummy-wrapper').trigger('click')
    expect(wrapper.vm.isOpen).to.eql(true)
    expect(wrapper.find('.cico--open').exists()).to.eql(true)
    expect(wrapper.find('.cico__month-day').exists()).to.eql(true)
  })

  const testCheckIn = new Date('2022-12-28')
  const testCheckOut = new Date('2022-12-31')

  it('should be able to select a check-in day', async () => {
    await wrapper.find('.is-valid-day').trigger('click')

    expect(helpers.compareDay(wrapper.vm.checkIn, testCheckIn)).to.eql(0)
  })

  it('should be able to select a check-out day', async () => {
    await wrapper.find('.is-valid-day').trigger('click')

    expect(helpers.compareDay(wrapper.vm.checkOut, testCheckOut)).to.eql(0)
  })

  it('should have emitted the check in date, the check out date and the period', async () => {
    expect(wrapper.emitted('check-in-selected').find((date) => helpers.compareDay(date, testCheckIn) === 0)).to.not.eql(
      null || undefined,
    )

    expect(
      wrapper.emitted('check-out-selected').find((date) => helpers.compareDay(date, testCheckOut) === 0),
    ).to.not.eql(null || undefined)

    expect(wrapper.emitted('period-selected').length).to.not.eql(0)
  })

  it('should emit the check in date in the YYYY-MM format', async () => {
    await wrapper.setProps({
      outputFormat: 'YYYY-MM',
    })

    await wrapper.find('.is-valid-day').trigger('click')

    expect(
      wrapper
        .emitted('check-in-selected')
        .find((date) => helpers.compareDay(date, helpers.dateFormatter(testCheckIn, 'YYYY-MM')) === 0),
    ).to.not.eql(null || undefined)
  })
})
