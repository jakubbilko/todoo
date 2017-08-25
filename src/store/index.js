import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './default-state'

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
