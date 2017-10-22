import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
//modules
// import mod1 from './modules/mod1'

Vue.use(Vuex)
const state = {
}
const store = new Vuex.Store({
  actions,
  getters,
  //modules: {mod1, mod2}, //?
  mutations,
  state,
})
export default store
