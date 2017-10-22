import Vue from "vue";
import Vuex from "vuex";
import { SOME_MUTATION } from "./mutation-types";

import { childDict, homeDict, scripDict } from "./storedicts";
import Child from "./classes/Child";
import Home from "./classes/Home";
import Prescription from "./classes/Prescription";

Vue.use(Vuex);
//This is an index signature

export default new Vuex.Store({
    state: {
        children: <childDict>{},
        homes: <homeDict>{},
        houseparents: {},
        prescriptions: <scripDict>{},
        physicians: {},
        hphomes: {}
    },
    getters: {
        numberOfChildren: state => {
            console.log("getting state children");
            return Object.keys(state.children).length;
        },
        children: state => {
            return Object.keys(state.children).map(
                key => state.children[parseInt(key)]
            );
        },
        specificChild: state => (id: number) => {
            return state.children[id];
        },
        homes: state =>
            Object.keys(state.homes).map(key => state.homes[parseInt(key)])
        ,
        specificHome: state => (id: number) =>
            state.homes[id]
        ,
        prescriptions: state =>
            Object.keys(state.prescriptions).map(key => state.prescriptions[parseInt(key)])
        ,
        specificScrip: state => (id: number) => state.prescriptions[id]
    },
    mutations: {
        newChild: (state, child) => {
            Vue.set(state.children, child.id, child);
        },
        updateChild: (state, child) => {
            state.children[child.id] = child;
        },
        deleteChild: (state, id) => {
            Vue.set(state.children, "0", undefined);
            delete state.children[id];
        },
        newHome: (state, home) => {
            Vue.set(state.homes, home.id, home);
        },
        updateHome: (state, home) => {
            state.homes[home.id] = home;
        },
        deleteHome: (state, id) => {
            Vue.set(state.homes, id, undefined);
            delete state.homes[id];
        },
        newScrip: (state, scrip) => {
            Vue.set(state.prescriptions, scrip.id, scrip);
        },
        updateScrip: (state, scrip) => {
            state.prescriptions[scrip.id] = scrip;
        },
        deleteScrip: (state, id) => {
            Vue.set(state.prescriptions, id, undefined);
            delete state.prescriptions[id];
        }
    },
    actions: {
        init({ dispatch, state }) {
            //mock data
            dispatch("getChildren");
            
            dispatch("createChild", new Child(12, "Chuck", 0));
            dispatch("createChild", new Child(19, "James", 0));
            dispatch("createHome", new Home(27, "10240 N. 66th St.", "(602) 618-0414"));
            dispatch("createScrip", new Prescription(12, 13, 14, "adderall", "adhd therapy", "20", "mg", 30, new Date()))
            
        },
        getChildren: ({ commit, state }) => {
            //Do API Call
            // Commit results
            $.get('localhost:8000/child').then((response: any) => {
                console.log(response);
            });
        },
        createChild: ({ commit, state }, child) => {
            commit("newChild", child);
        },
        createHome: ({ commit, state }, home) => {
            commit("newHome", home);
        },
        createScrip: ({ commit, state }, scrip) => {
            commit("newScrip", scrip);
        }
    }
});
