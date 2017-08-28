import Vue from '@/bootstrap'

const LocalStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    Vue.localStorage.set('VueTodoL', JSON.stringify(state.lists))
  })
}

export default LocalStoragePlugin
