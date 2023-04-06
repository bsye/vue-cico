import { shallowMount } from '@vue/test-utils'
import DateInputCheckOut from '../../components/DateInputCheckOut.vue'
import helpers from '../../src/helpers'
import i18n from '../../public/i18n/en'
import get from 'lodash.get'

describe('DateInputCheckOut Component', () => {
  describe('checkOutDateDisplay', () => {
    let wrapper
    let wrapper2

    beforeEach(() => {
      wrapper = shallowMount(DateInputCheckOut, {
        propsData: {
          isOpen: false,
          toggleDatepicker: () => false,
          i18n: i18n,
          inputSize:'',
          checkoutFieldFormat: '',
          checkIn: new Date('2022-12-12'),
          checkOut: new Date('2022-12-13')
        },
      })

      wrapper2 = shallowMount(DateInputCheckOut, {
        propsData: {
          isOpen: false,
          toggleDatepicker: () => false,
          i18n: i18n,
          inputSize:'',
          checkoutFieldFormat: '',
          checkIn: null,
          checkOut: null
        },
      })
    })
    it('should display the selected checkOut date', async () => {
      expect(wrapper.html()).toContain(helpers.dateFormatter(wrapper.vm.checkOut, 'DD'))
    })
    it('should display the placeholder message when no check-out is selected', async () => {
      expect(wrapper2.html()).toContain(get(i18n, 'activity.filter.action'))
    })
  })

  describe('checkOutDateFormatting', () => {
    let wrapper
    let wrapper2
    let wrapper3

    beforeEach(() => {
      wrapper = shallowMount(DateInputCheckOut, {
        propsData: {
          isOpen: false,
          toggleDatepicker: () => false,
          i18n: i18n,
          inputSize:'long',
          checkoutFieldFormat: '',
          checkIn: new Date('2022-12-12'),
          checkOut: new Date('2022-12-13')
        },
      })

      wrapper2 = shallowMount(DateInputCheckOut, {
        propsData: {
          isOpen: false,
          toggleDatepicker: () => false,
          i18n: i18n,
          inputSize:'short',
          checkoutFieldFormat: '',
          checkIn: new Date('2022-12-12'),
          checkOut: new Date('2022-12-13')
        },
      })

      wrapper3 = shallowMount(DateInputCheckOut, {
        propsData: {
          isOpen: false,
          toggleDatepicker: () => false,
          i18n: i18n,
          inputSize:'extra-short',
          checkoutFieldFormat: '',
          checkIn: new Date('2022-12-12'),
          checkOut: new Date('2022-12-13')
        },
      })
    })
    it('should use the format ddd DD MMM when input is long', async () => {
      let button = wrapper.find('.cico__input');
      expect(button.text()).toBe(helpers.dateFormatter(wrapper.vm.checkOut, 'ddd DD MMM'));
    })
    
    it('should use the format DD MMM when input is short', async () => {
      let button = wrapper2.find('.cico__input');
      expect(button.text()).toBe(helpers.dateFormatter(wrapper.vm.checkOut, 'DD MMM'));
    })
    
    it('should use the format DD MMM when input is extra-short', async () => {
      let button = wrapper3.find('.cico__input');
      expect(button.text()).toBe(helpers.dateFormatter(wrapper.vm.checkOut, 'DD MMM'));
    })
  })
})
