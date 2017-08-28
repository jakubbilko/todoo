import Vue from 'vue'
import Vuex from 'vuex'
import { expect } from 'chai'
import * as actions from '@/store/actions'
import * as mutations from '@/store/mutations'
import * as getters from '@/store/getters'

Vue.use(Vuex)

const state = {
  lists: [
    { id: 1, name: 'list', elements: [] }
  ]
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  const commit = (type, payload) => {
    const mutation = expectedMutations[0]
    expect(mutation.type).to.equal(type)
    count++

    if (count >= expectedMutations.length) {
      done()
    }
  }

  const getters = store.getters

  action({ commit, state, getters }, args)

  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('Actions', () => {
  it('changeListName', (done) => {
    const state = store.state
    testAction(actions.changeListName, { name: 'newlist', listId: 1 }, state, [{ type: 'changeListName' }], done)
  })

  it('addElementToList', (done) => {
    const state = store.state
    testAction(actions.addElementToList, { name: 'element', listId: 1 }, state, [{ type: 'addElementToList' }], done)
  })

  it('checkListElement', (done) => {
    const state = store.state
    testAction(actions.checkListElement, { elementId: 1, listId: 1 }, state, [{ type: 'checkListElement' }], done)
  })

  it('renameListElement', (done) => {
    const state = store.state
    testAction(actions.renameListElement, { elementId: 1, listId: 1, name: 'newelement' }, state, [{ type: 'renameListElement' }], done)
  })

  it('removeElementFromList', (done) => {
    const state = store.state
    testAction(actions.removeElementFromList, { elementId: 1, listId: 1 }, state, [{ type: 'removeElementFromList' }], done)
  })
})
