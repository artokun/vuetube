import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'
import player from './modules/player'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    search,
    player
  },
  strict: debug
})
