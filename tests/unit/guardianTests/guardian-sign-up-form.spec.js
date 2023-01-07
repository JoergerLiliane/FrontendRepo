import { mount } from '@vue/test-utils'

import GuardianSignupForm from "@/components/GuardianSignupForm";

describe('Testing RegistrationUserView.vue', () => {
    it('What should be testes: Should not show registration form by default', () => {
        //Actual
        const wrapper = mount(GuardianSignupForm)

        //Expected
        expect(wrapper.find('#guardians-create-form').classes()).not.toContain('show')
    })
})
