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
        houseparents: <parentDict>{},
        prescriptions: <scripDict>{},
        physicians: <any>{},
        hphomes: {},
        administrations: [],
        custody: []
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
        parents: state => {
            return Object.keys(state.houseparents).map(
                key => state.houseparents[parseInt(key)]
            );
        },
        physicians: state => {
            return Object.keys(state.physicians).map(
                key => state.physicians[parseInt(key)]
            );
        },
        prescriptions: state => {
            return Object.keys(state.prescriptions).map(
                key => state.prescriptions[parseInt(key)]
            );
        },
        administrations: state => {
            return state.administrations.map((administration: any) => {
                administration.date = new Date(administration.date);
                return administration;
            });
        },
        custody: state => {
            return state.custody.map((custody: any) => {
                custody.checkout = new Date(custody.checkout);
                custody.checkin = new Date(custody.checkin);
                return custody;
            })
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
        setChildren: (state, children) => {
            state.children = children;
        },
        newParent: (state, parent) => {
            Vue.set(state.houseparents, parent.id, parent);
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
        },
        setAdministrations: (state, administrations) => {
            state.administrations = administrations;
        },
        setCustody: (state, custody_events) => {
            state.custody = custody_events;
        }
    },
    actions: {
        init({ dispatch, state }) {
            dispatch("getChildren");
            dispatch("getParents");
            dispatch("getPhysicians");
            dispatch("getPrescriptions");
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
        getPhysicians: ({ commit, state }) => {
            $.get('http://localhost:8000/physician').then((response) => {
                console.log(response);
                if (response.success) {
                    for (var physician of response.data) {
                        commit("newPhysician", physician);
                    }
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
        getReport: ({ commit, state }, search) => {
            console.log(search);

            $.get('http://localhost:8000/report/bychildanddate/' + search.child_id + "?mindate=" + search.min_date + "&maxdate=" + search.max_date).then((response) => {
                console.log("Report: ", response.data);
                if (response.success) {
                    commit("setAdministrations", response.data.administrationData);
                    commit("setCustody", response.data.custodyData);
                }

            })
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
