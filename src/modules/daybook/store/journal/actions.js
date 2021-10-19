import journalApi from '@/api/journalApi'
// export const loadEntries = async ({ commit }) => {}

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')
  if (!data) return commit('setEntries', [])

  const entries = []
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }
  commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, payload) => {
  const { date, picture, text } = payload
  const dataToSave = { date, picture, text }
  await journalApi.put(`/entries/${payload.id}.json`, dataToSave)
  commit('updateEntry', { ...payload })
}

export const createEntry = async ({ commit }, payload) => {
  const { data } = await journalApi.post(`/entries.json`, payload)
  const newEntry = { ...payload, id: data.name }
  commit('addEntry', newEntry)
  return data.name
}

export const deleteEntry = async ({ commit }, payload) => {
  await journalApi.delete(`/entries.json`, payload)
  commit('deleteEntry', payload)
  return payload
}
