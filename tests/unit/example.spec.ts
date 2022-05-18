import { shallowMount } from '@vue/test-utils'
import HeaderVue from '@/components/HeaderVue.vue'

describe('HeaderVue.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HeaderVue, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
