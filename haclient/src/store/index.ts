import Vue from 'vue';
import Vuex from 'vuex';
import { SOME_MUTATION } from './mutation-types'
import Child from './classes/Child'
import Home from './classes/Home'

Vue.use(Vuex)
//This is an index signature
interface childDict {
    [key: number]: Child
}
interface homeDict {
    [key: number]: Home
}


export default new Vuex.Store({
    state: {
        children: <childDict>{},
        homes: <homeDict>{},
        houseparents: {},
        prescriptions: {},
        physicians: {},
        hphomes: {}
    },
    getters: {
        numberOfChildren: state => {
            console.log("getting state children")
            return Object.keys(state.children).length;
        },
        children: state => {
            return (Object.keys(state.children)).map((key) => state.children[parseInt(key)])
        },
        specificChild: state => (id: number) => {
            return state.children[id];
        }
    },
    mutations: {
        newChild: (state, child) => {
            Vue.set(state.children, child.id, child);
        },
        updateChild: (state, child) => {
            state.children[child.id] = child;
        },
        deleteChild: (state, id) => {
            Vue.set(state.children, '0', undefined);
            delete state.children[id];
        }
    },
    actions: {
        createChild: ({ commit, state }, child) => {
            commit('newChild', child);
        },
        createHome: ({ commit, state }, home) => {
            commit('newHome', home);
        }

    }
})