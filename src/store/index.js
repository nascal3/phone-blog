import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDialog: false
  },
  mutations: {
    SHOW_DIALOG (state, payload) {
      state.showDialog = payload
    }
  },
  actions: {
  },
  getters: {
    showDialog (state) {
      return state.showDialog
    }
  },
  modules: {
  }
})
