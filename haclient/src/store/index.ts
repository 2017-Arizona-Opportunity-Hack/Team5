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
        prescriptions: <homeDict>{},
        houseparents: {},
        homes: {},
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
        }
    },
    mutations: {
        newChild: (state, id) => {
            Vue.set(state.children, id, new Child(id, "chuck"));
        }
    },
    actions: {

    }
})