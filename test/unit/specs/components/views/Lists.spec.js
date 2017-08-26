import { mount } from 'avoriaz'
import Lists from '@/components/views/Lists'
import store from '@/store/'

describe('Lists', () => {
  const wrapper = mount(Lists, { store })
  it('Should show message when there are no lists', () => {
    expect(wrapper.html()).to.match(/Looks like you have no lists yet/)
  })
})
