// export const myMutation = (state, payload) => {}

export const setEntries = (state, payload) => {
  state.entries = [...state.entries, ...payload]
  state.isLoading = false
}

export const updateEntry = (/* state, payload */) => {}
export const addEntry = (/* state, payload */) => {}
