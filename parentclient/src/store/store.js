import Vue from 'vue'
import Vuex from 'vuex'
//modules
import login from './modules/Login_module.js'
import Parent_Module from './modules/Parent_Module.js'

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
  },
  modules: {
    login,
    Parent_Module,
  },
  getters: {
  },
  mutations: {
  },
  state: {
  },
})
