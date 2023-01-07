import { mount } from '@vue/test-utils'
import GuardianView from "@/views/GuardianView";
import GuardianCardList from "@/components/GuardianCardList";
import GuardianSignupForm from "@/components/GuardianSignupForm";

describe('Testing GuardianView.vue', () => {
    it('should show page title', () => {
        //Actual
        const wrapper = mount(GuardianView)

        //Expected
        expect(wrapper.text()).toMatch('Guardians')
    })

    it('should have guardian card list component', () => {
        //Actual
        const wrapper = mount(GuardianView)

        //Expected
        const cardList = wrapper.findComponent(GuardianCardList)
        expect(cardList.exists()).toBeTruthy()
    })

    it('should have guardian signup form component', () => {
        //Actual
        const wrapper = mount(GuardianView)

        //Expected
        const signUpForm = wrapper.findComponent(GuardianSignupForm)
        expect(signUpForm.exists()).toBeTruthy()
    })
})
