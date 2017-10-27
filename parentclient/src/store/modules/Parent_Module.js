const state = {
    listOfHomes: [],
    listOfChildren: [],
    listOfMedications: [],
}

const getters = {
    getHomes: (state) => {
        // console.log("Trying to grab the fucking houses?:\t", state.listOfHomes);
        return state.listOfHomes;
    },
    getChildren: (state) => {
        return state.listOfChildren;
    },
    getMedication: (state) => {
        return state.listOfMedications;
    }
}

const mutations = {
    changeHomeListings: (state, retrievedHomes) => {
        state.listOfHomes = retrievedHomes;
        // console.log(state.listOfHomes)
    },
    changeChildListings: (state, retrievedChildren) => {
        state.listOfChildren = retrievedChildren;
        // console.log("From our store:\t", state.listOfChildren)
    }
}

const actions = {
    init({ dispatch, state }) {
        dispatch("getHomeListingsFromServer");
    },
    getHomeListingsFromServer: ({ commit }, payload) => {
        $.get(
            "http://localhost:8000/home/",
            function(result) {
              let retrievedHomes = [];
              result.data.forEach(function(element) {
                retrievedHomes.push(element);
              }, this);
            //   console.log(retrievedHomes);
              commit('changeHomeListings', retrievedHomes);
            }
          );
    },
    getChildrenListingsFromServer: ({ commit }, payload) => {
        // Payload parameter is an object, and the object
        // has a homeID attribute assigned, so within homeID we get ID.
        var urlGetChildByHome = "http://localhost:8000/child/byhomeid/";
        urlGetChildByHome += payload.homeID;
        // console.log("Passed URL:\t", payload.homeID);
        $.get(
          urlGetChildByHome,
          function(result) {
            let retrievedChildren = [];
            result.data.forEach(function(element) {
              retrievedChildren.push(element);
            }, this);
            commit('changeChildListings', retrievedChildren);
          }
        );
    },

}

export default {
    state,
    getters,
    mutations, 
    actions
}