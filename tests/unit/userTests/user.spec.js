import { mount } from '@vue/test-utils'

import UserView from "@/views/UserView";
import UserCardList from "@/components/UserCardList";
import RegistrationUserView from "@/views/RegistrationUserView";

describe('Testing UserView.vue', () => {
    it('should show page title', () => {
        //Actual
        const wrapper = mount(UserView)

        //Expected
        expect(wrapper.text()).toMatch('User')
    })

    it('should have user card list component', () => {
        //Actual
        const wrapper = mount(UserView)

        //Expected
        const cardList = wrapper.findComponent(UserCardList)
        expect(cardList.exists()).toBeTruthy()
    })

    it('should not have a user registration-form component', () => {
        //Actual
        const wrapper = mount(UserView)

        //Expected
        const registrationForm = wrapper.findComponent(RegistrationUserView)
        expect(registrationForm.exists()).toBeFalsy()
    })
})
