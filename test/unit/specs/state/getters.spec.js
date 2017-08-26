import { expect } from 'chai'
import * as getters from '@/store/getters'

const state = {
  lists: [
    {
      id: 1,
      name: 'list',
      elements: [
        { id: 1, name: 'element', completed: false }
      ]
    }
  ]
}

describe('Getters', () => {
  it('lists', () => {
    const result = getters.lists(state)
    expect(result.length).to.equal(1)
    expect(result[0].name).to.equal('list')
  })

  it('getLatestListId', () => {
    const result = getters.getLatestListId(state)
    expect(result).to.equal(1)
  })

  it('getListById', () => {
    const result = getters.getListById(state)(1)
    expect(result.name).to.equal('list')
  })

  it('getListElementById', () => {
    const mockGetters = {
      getListById: getters.getListById(state)
    }
    const result = getters.getListElementById(state, mockGetters)(1, 1)
    expect(result.name).to.equal('element')
  })
})
