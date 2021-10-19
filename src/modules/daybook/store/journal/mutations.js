// export const myMutation = (state, payload) => {}

export const setEntries = (state, payload) => {
  state.entries = [...state.entries, ...payload]
  state.isLoading = false
}

export const updateEntry = (state, payload) => {
  const idx = state.entries.findIndex(e => e.id === payload.id)
  state.entries[idx] = payload
}

export const addEntry = (state, payload) => {
  state.entries.unshift(payload)
}

export const deleteEntry = (state, payload) => {
  state.entries = state.entries.filter(entry => entry.id !== payload)
}
