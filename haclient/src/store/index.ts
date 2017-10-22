import Vue from "vue";
import Vuex from "vuex";
import { SOME_MUTATION } from "./mutation-types";

import { childDict, homeDict, scripDict, parentDict } from "./storedicts";
import Child from "./classes/Child";
import Home from "./classes/Home";
import Prescription from "./classes/Prescription";


Vue.use(Vuex);
//This is an index signature

export default new Vuex.Store({
    state: {
        children: <childDict>{},
        homes: <homeDict>{},
        parents: <parentDict>{},
        prescriptions: <scripDict>{},
        physicians: <any>{},
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
            ).sort((a, b)=>(a.name < b.name? -1 : 1));
        },
        parents: state => {
            return Object.keys(state.parents).map(
                key => state.parents[parseInt(key)]
            ).sort((a, b)=>(a.id - b.id));
        },
        physicians: state => {
            return Object.keys(state.physicians).map(
                key => state.physicians[parseInt(key)]
            ).sort((a, b)=>(a.id - b.id));
        },
        prescriptions: state => {
            return Object.keys(state.prescriptions).map(
                key => state.prescriptions[parseInt(key)]
            ).sort((a, b)=>(a.id - b.id));
        },
        specificChild: state => (id: number) => {
            return state.children[id];
        },
        homes: state =>
            Object.keys(state.homes).map(key => state.homes[parseInt(key)]).sort((a, b)=>(a.id - b.id))
        ,
        specificHome: state => (id: number) =>
            state.homes[id]
        ,
        specificScrip: state => (id: number) => state.prescriptions[id]
        ,
        specificPhysician: state => (id: number) => state.physicians[id]
        ,
        specificParent: state => (id: number) => state.parents[id]
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
        setChildren: (state, children) => {
            state.children = children;
        },
        newParent: (state, parent) => {
            Vue.set(state.parents, parent.id, parent);
        },
        newPhysician: (state, physician) => {
            Vue.set(state.physicians, physician.id, physician);
        },
        newPrescription: (state, prescription) => {
            Vue.set(state.prescriptions, prescription.id, prescription);
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
            dispatch("getChildren");
            dispatch("getParents");
            dispatch("getPhysicians");
            dispatch("getPrescriptions");
            dispatch("getHomes");
        },
        getChildren: ({ commit, state }) => {
            $.get('http://localhost:8000/child').then((response: any) => {
                console.log(response);

                if (response.success) {
                    for (var child of response.data) {
                        commit("newChild", child);
                    }
                }
            });
        },
        getParents: ({ commit, state }) => {
            $.get('http://localhost:8000/parent').then((response) => {
                console.log(response);
                if (response.success) {
                    for (var parent of response.data) {
                        commit("newParent", parent);
                    }
                }
            });
        },
        getHomes: ({ commit, state }) => {
            $.get('http://localhost:8000/home').then((response) => {
                console.log(response);
                if (response.success) {
                    for (var home of response.data) {
                        console.debug("New home!", home)
                        commit("newHome", home);
                    }
                }
            });
        },
        getPhysicians: ({ commit, state }) => {
            $.get('http://localhost:8000/physician').then((response) => {
                console.log(response);
                if (response.success) {
                    window.setTimeout(()=>{
                        for (var physician of response.data) {
                            commit("newPhysician", physician);
                        }
                    }, 600)
                    
                }
            });
        },
        getPrescriptions: ({ commit, state }) => {
            $.get('http://localhost:8000/prescription').then((response) => {
                console.log(response);
                if (response.success) {
                    for (var prescription of response.data) {
                        commit("newPrescription", prescription);
                    }
                }
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
