import axios from 'axios'
const API_KEY = process.env.API_KEY
const YT_URL = 'https://www.googleapis.com/youtube/v3/search'

// initial state
const state = {
  results: []
}

// getters
const getters = {
  results: state => state.results
}

// mutation types
const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
const SEARCH_FAIL = 'SEARCH_FAIL'

// actions
const actions = {
  search ({ commit, state }, query) {
    axios.get(YT_URL, { params: { key: API_KEY, part: 'snippet', q: query } })
      .then(({ data }) => commit(SEARCH_SUCCESS, data))
      .catch(err => commit(SEARCH_FAIL, err))
  }
}

// mutations
const mutations = {
  [SEARCH_SUCCESS] (state, { items }) {
    state.results = items
  },
  [SEARCH_FAIL] (state, err) {
    alert(err.message)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
