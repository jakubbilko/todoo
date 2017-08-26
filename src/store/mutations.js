export function addList (state, name) {
  const list = { id: state.lists.length + 1, name, elements: [] }
  state.lists.push(list)
}

export function addElementToList (state, payload) {
  const { list, name } = payload
  list.elements.push({ id: list.elements.length + 1, name, completed: false })
}
export function checkListElement (state, element) {
  element.completed = !element.completed
}

export function removeElementFromList (state, payload) {
  const { list, elementId } = payload
  list.elements = list.elements.filter(e => e.id !== elementId)
}

export function removeList (state, listId) {
  state.lists.splice(listId - 1, 1)
}
