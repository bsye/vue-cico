import { mount } from '@vue/test-utils'
import DateInputs from '../../components/DateInputs.vue'

describe('DateInputs Component', () => {
  let wrapper
  let wrapper2

  beforeEach(() => {
    wrapper = mount(DateInputs, {
      propsData: {
        toggleDatepicker: () => false,
        i18n: {},
        checkIn: null,
      },
    })

    wrapper2 = mount(DateInputs, {
      propsData: {
        toggleDatepicker: () => false,
        i18n: {},
        checkIn: new Date('2022-12-12'),
      },
    })
  })

  it('should update the inputSize based on the inputWidth', async () => {
    wrapper.vm.inputWidth = 400
    expect(wrapper.vm.inputSize).toBe('long')

    wrapper.vm.inputWidth = 153
    expect(wrapper.vm.inputSize).toBe('short')

    wrapper.vm.inputWidth = 149
    expect(wrapper.vm.inputSize).toBe('extra-short')
  })

  it('should show the extended placeholder if the input is long and no selection is made', () => {
    wrapper.vm.inputWidth = 1
    expect(wrapper.vm.showExtendedPlaceholder).toBe(false)

    wrapper.vm.inputWidth = 400
    expect(wrapper.vm.showExtendedPlaceholder).toBe(true)
  })

  it('should show the input labels if the input is long', () => {
    wrapper.vm.inputWidth = 400
    expect(wrapper.vm.showInputLabels).toBe(true)
  })

  it('should hide the input labels if the input is extra-short', () => {
    wrapper.vm.inputWidth = 1
    expect(wrapper.vm.showInputLabels).toBe(false)
  })
  it('should show the input labels if the input is short and a date selection is made', () => {
    wrapper2.vm.inputWidth = 234
    expect(wrapper2.vm.showInputLabels).toBe(true)
  })
})
