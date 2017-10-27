import Vue from 'vue'
import Vuex from 'vuex'
//modules
import login from './modules/Login_module.js'
import Parent_Module from './modules/Parent_Module.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {
  },
  getters: {
  },
  modules: {
    login,
    parentmod: Parent_Module,
  },
  mutations: {
  },
  state: {
  },
})
export default store
