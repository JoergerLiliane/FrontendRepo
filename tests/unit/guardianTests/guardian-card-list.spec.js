import { mount } from '@vue/test-utils'
import GuardianCardList from "@/components/GuardianCardList";
import GuardianCard from "@/components/GuardianCard";


describe('Testing GuardianCardList.vue', () => {
    it('should render a guardian card for each guardian', () => {
        //Actual
        const wrapper = mount(GuardianCardList, {
            props: {
                guardian: [
                    {
                        id: 33,
                        firstName: 'Liliane',
                        lastName: 'Jörger',
                        gender: 'FEMALE',
                        phoneNumber: 122,
                        guardian: false,
                        priorityLevel: 1,
                        userId: 6

                    },
                    {
                        id: 35,
                        firstName: 'Bernd',
                        lastName: 'V',
                        gender: 'MALE',
                        phoneNumber: 240,
                        guardian: false,
                        priorityLevel: 1,
                        userId: 12

                    }
                ]
            }
        })

        //Expected
        const guardianCards = wrapper.findAllComponents(GuardianCard)
        expect(guardianCards.length).toBe(2)
    })
})
