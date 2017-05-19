// initial state
const state = {
  videoId: ''
}

// getters
const getters = {
  videoId: state => state.videoId
}

// mutation types
const SET_VIDEO = 'SET_VIDEO'

// actions
const actions = {
  play ({ commit, state }, videoId) {
    commit(SET_VIDEO, videoId)
  }
}

// mutations
const mutations = {
  [SET_VIDEO] (state, videoId) {
    state.videoId = videoId
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
