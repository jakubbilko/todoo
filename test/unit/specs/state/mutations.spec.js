import { expect } from 'chai'
import * as mutations from '@/store/mutations'

const state = { lists: [] }

describe('Mutations', () => {
  it('addList', () => {
    mutations.addList(state, 'list')
    expect(state.lists.length).to.equal(1)
    expect(state.lists[0].name).to.equal('list')
  })

  it('changeListName', () => {
    mutations.changeListName(state, { list: state.lists[0], name: 'newlist' })
    expect(state.lists[0].name).to.equal('newlist')
  })

  it('addElementToList', () => {
    mutations.addElementToList(state, { list: state.lists[0], name: 'element' })
    expect(state.lists[0].elements.length).to.equal(1)
    expect(state.lists[0].elements[0].name).to.equal('element')
  })

  it('renameListElement', () => {
    mutations.renameListElement(state, { element: state.lists[0].elements[0], name: 'newelement' })
    expect(state.lists[0].elements[0].name).to.equal('newelement')
  })

  it('checkListElement', () => {
    mutations.checkListElement(state, state.lists[0].elements[0])
    expect(state.lists[0].elements[0].completed).to.equal(true)
  })

  it('removeElementFromList', () => {
    mutations.removeElementFromList(state, { list: state.lists[0], elementId: 1 })
    expect(state.lists[0].elements.length).to.equal(0)
  })

  it('removeList', () => {
    mutations.removeList(state, 1)
    expect(state.lists.length).to.equal(0)
  })
})
