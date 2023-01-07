import { mount } from '@vue/test-utils'
import UserCard from "@/components/UserCard";

describe('Testing GuardianCard.vue', () => {
    it('should render firstName and lastName feom guardian', () => {
        //Actual
        const wrapper = mount(UserCard, {
            props: {
                user: {
                    id: 6,
                    firstName: 'Karla',
                    lastName: 'Jörger',
                    gender: 'FEMALE',
                    phoneNumber: 0,
                    guardianId: 33,
                    country:'Germany',
                    userName:'karlaj',
                    password:'#123456789',
                    user: false
                }
            }
        })

        //Expected
        const cardTitle = wrapper.find('.card-title')
        expect(cardTitle.text()).toBe('Karla Jörger')
    })

    it.each`
    userId | expected
    ${userId}    | ${6}
   
  `('should render guardian which belongs to this user with this id ', ({ userId, expected }) => {
        //Actual
        const guardianToUser = {
            id: 33,
            firstName: 'Liliane',
            lastName: 'Jörger',
            gender: 'FEMALE',
            phoneNumber: 122,
            guardian: false,
            priorityLevel: 1,
            userId: userId
        }
        const wrapper = mount(UserCard, {
            propsData: {
                user: guardianToUser
            }
        })

        //Expected
        const cardTitle = wrapper.find('.card-text')
        expect(cardTitle.text()).toContain(`${guardianToUser.firstName} ${guardianToUser.lastName} is ${expected}`)
    })

    it.each`
    guardians        | expected
    ${[]}       | ${'0 Guardian'}
    ${[{}]}     | ${'1 Guardian(s)'}
    ${[{}, {}]} | ${'2 Guardian(s)'}
  `('should render amount of guardians ($guardian.length guardians)', ({ guardians, expected }) => {
        //Actual
        const guardianToUser = {
            id: 1,
            firstName: 'Liliane',
            lastName: 'Mustermann',
            vaccinated: true,
            guardians: guardians
        }
        const wrapper = mount(UserCard, {
            propsData: {
                user: guardianToUser
            }
        })

        //Expected
        const cardTitle = wrapper.find('.card-text')
        expect(cardTitle.text()).toContain(`und hat ${expected}`)
    })
})

