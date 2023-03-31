import { mount } from '@vue/test-utils'
import DateInputs from '../../components/DateInputs.vue'

describe('DateInputs Component', () => {
  const wrapper = mount(DateInputs, {})

  it('should verify the inputWidth', async () => {
    wrapper.vm.inputWidth = 400

    wrapper.vm.inputWidth = 250

    wrapper.vm.inputWidth = 200

    console.log(wrapper.vm.inputWidth)
    console.log(wrapper.vm.inputSize)
  })
})
