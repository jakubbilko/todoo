export function lists (state) {
  return state.lists
}

export function getLatestListId (state) {
  return state.lists.length
}

export function getListById (state) {
  return (id) => state.lists.find(l => l.id === id)
}

export function getListElementById (state, getters) {
  return (listId, elementId) => {
    const list = getters.getListById(listId)
    return list.children.find(c => c.id === elementId)
  }
}
