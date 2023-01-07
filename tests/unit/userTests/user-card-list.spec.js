import { mount } from '@vue/test-utils'
import UserCardList from "@/components/UserCardList";
import UserCard from "@/components/UserCard";


describe('Testing UserCardList.vue', () => {
    it('should render a user card for each user', () => {
        //Actual
        const wrapper = mount(UserCardList, {
            props: {
                user: [
                    {
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

                    },
                    {
                        id: 12,
                        firstName: 'Lili',
                        lastName: 'Jörger',
                        gender: 'FEMALE',
                        phoneNumber: 0,
                        guardianId: 35,
                        country:'Germany',
                        userName:'dwcs',
                        password:null,
                        user: false

                    }
                ]
            }
        })

        //Expected
        const userCards = wrapper.findAllComponents(UserCard)
        expect(userCards.length).toBe(2)
    })
})
