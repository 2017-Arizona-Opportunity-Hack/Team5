import Vue from 'vue';
import Vuex from 'vuex';
import { SOME_MUTATION } from './mutation-types'
import Child from './classes/Child'

Vue.use(Vuex)
//This is an index signature
interface childDict {
    [key: number]: Child
}


export default new Vuex.Store({
    state: {
        children: <childDict>{},
        prescriptions: {},
        houseparents: {},
        homes: {},
        physicians: {},
        hphomes: {}
    },
    getters: {
        numberOfChildren: state => {
            console.log("getting state children")
            return Object.keys(state.children);
        }
    },
    mutations: {
        newChild: (state, id) => {
            Vue.set(state.children, id, new Child(id, "chuck"));
        }
    }
})