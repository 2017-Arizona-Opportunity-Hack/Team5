import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
Vue.use(Vuex)
const state = {
}
const store = new Vuex.Store({
  actions,
  getters,
  //modules, //?
  mutations,
  state,
})
export default store
