import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MonthSelector from '../../components/MonthSelector.vue'

describe('MonthSelector', () => {
    let component = null
    beforeEach(() => {
        component = shallowMount(MonthSelector, {
            propsData: {
                minDate: new Date('2023-02-03'),
                maxDate: new Date('2024-08-03'),
                firstDayOfWeek: 2,
                activeMonthIndex: 7,
            }
        })
    })

    it('Should display the correct month range', async () => {
        expect(component.vm.maxMonth).to.equal(18)
        await component.setProps({ maxDate: new Date('2023-03-03') })
        expect(component.vm.maxMonth).to.equal(1)
    })

    it('Should return the months object based on the months range + 12', async () => {
        await component.setProps({ maxDate: new Date('2023-03-03') })
        expect(component.vm.months.length).to.equal(13)
        await component.setProps({ maxDate: new Date('2023-08-03') })
        expect(component.vm.months.length).to.equal(18)
    })


    it('Should check if it is newYear', () => {
        expect(component.vm.getIsNewYear({
            days: [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                { date: new Date('2023-01-01') },
            ]
        })).to.equal(true)

        expect(component.vm.getIsNewYear({
            days: [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                { date: new Date('2023-02-01') },
            ]
        })).to.equal(false)
    })

    it('Should get the unique key for the month based on the 15th day', () => {
        expect(component.vm.getUniqueKey({
            days: [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                { date: new Date('2023-02-15') },
            ]
        })).to.equal(1676419200000)
    })

    it('Should emit month-selected if you click on the month and the index is less than the max month selectable', () => {
        component.find('[data-testid="cico__months-selector--month-6"').trigger('click')
        expect(component.emitted('month-selected').length).to.eql(1)

        component.find('[data-testid="cico__months-selector--month-21"').trigger('click')
        expect(component.emitted('month-selected').length).to.eql(1)

        component.find('[data-testid="cico__months-selector--month-3"').trigger('click')
        expect(component.emitted('month-selected').length).to.eql(2)
    })

    it('Should display the year on top', () => {
        expect(component.find('[data-testid="cico__months-selector--newyear-2024"')).to.not.eql(null || undefined)
    })
})