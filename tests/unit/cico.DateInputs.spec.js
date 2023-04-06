import { mount } from '@vue/test-utils'
import DateInputs from '../../components/DateInputs.vue'

describe('DateInputs Component', () => {
  const wrapper = mount(DateInputs, {
    propsData: {
      toggleDatepicker: () => false,
      i18n: {}, 
      checkIn:null
    }
  })

  it('should update the inputSize based on the inputWidth', async () => {
    wrapper.vm.inputWidth = 400
    expect(wrapper.vm.inputSize).toBe('long')

    wrapper.vm.inputWidth = 234
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
})
