import { mount } from '@vue/test-utils'
import pageHeader from '@/components/shared/page-header.vue'

describe('page-header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(pageHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
