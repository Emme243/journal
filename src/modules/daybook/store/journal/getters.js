/* export const myGetter = state => {
  return
} */

export const getEntiresByTerm = state => (term = '') => {
  if (!term) return state.entries

  return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getEntiresById = state => id => state.entries.find(entry => entry.id === id)
