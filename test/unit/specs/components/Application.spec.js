import { mount } from 'avoriaz'
import Application from '@/components/Application'

const wrapper = mount(Application)

describe('Application', () => {
  it('Should render header', () => {
    expect(wrapper.contains('h2')).to.equal(true)
  })
})
