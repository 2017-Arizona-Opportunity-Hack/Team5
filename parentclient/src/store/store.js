import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
//modules
import login from './modules/Login_module.js'

Vue.use(Vuex)
const state = {
}
const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    login,
  },
  mutations,
  state,
})
export default store
