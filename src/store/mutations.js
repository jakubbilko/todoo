export function addList (state, name) {
  const list = { id: state.lists.length + 1, name, children: [] }
  state.lists.push(list)
}

export function addElementToList (state, payload) {
  const { list, name } = payload
  list.children.push({ id: list.children.length + 1, name, completed: false })
}
export function checkListElement (state, element) {
  element.completed = !element.completed
}
