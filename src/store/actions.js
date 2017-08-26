export function addElementToList ({commit, getters}, payload) {
  const list = getters.getListById(payload.listId)
  commit('addElementToList', { list, name: payload.name })
}

export function checkListElement ({commit, getters}, payload) {
  const element = getters.getListElementById(payload.listId, payload.elementId)
  commit('checkListElement', element)
}

export function removeElementFromList ({commit, getters}, payload) {
  const list = getters.getListById(payload.listId)
  commit('removeElementFromList', { list, elementId: payload.elementId })
}
