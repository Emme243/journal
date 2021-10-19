import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demos-f467b-default-rtdb.firebaseio.com'
})

export default journalApi
