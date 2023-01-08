import { shallowMount} from '@vue/test-utils'

import RegistrationUserView from "@/views/RegistrationUserView";

describe('Testing RegistrationUserView.vue', () => {
    it('What should be testes: Should not show registration form by default', () => {
        //Actual
        const wrapper = shallowMount(RegistrationUserView)

        //Expected
        expect(wrapper.find('#users-create-form').classes()).not.toContain('show')
    })
})
