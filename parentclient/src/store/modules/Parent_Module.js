const state = {
    homeListing: [],
    childListing: [],
    medicationListing: [],
}

const getters = {
    homeListings: (state) => {
        return state.homeListing;
    },
    childListings: (state) => {
        return state.childListing;
    },
    medicineListings: (state) => {
        return state.medicationListing;
    }
}

const mutations = {
    setupHomeListings: (state, payload) => {
        state.homeListing = payload;
    }
}

const actions = {
    getHomeListingsFromServer: ({ commit }, payload) => {
        $.get(
            "http://localhost:8000/home/",
            function(result) {
              let retrievedHomes = [];
              result.data.forEach(function(element) {
                retrievedHomes.push(element);
              }, this);
              commit('setupHomeListings', retrievedHomes);
            }
          );
    }
}

export default {
    state,
    getters,
    mutations, 
    actions
}