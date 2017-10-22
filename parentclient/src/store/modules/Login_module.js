/*inital state*/
const _state = {
  fullName: "",
  email: "",
  password: "",
}
/**TODO: may need to commit with a payload. pass the field to update store.*/
const _actions = {
  store_fullName({state, commit, rootState}) {
    commit('STORE_FULLNAME')
  },
  store_email({state, commit, rootState}) {
    commit('STORE_EMAIL')
  },
  store_password({state, commit, rootState}) {
    commit('STORE_PASSWORD')
  },
}
/*should make mutation vars as constants*/
/**TODO: fix mutation to store a payload correctly*/
const _mutations = {
  STORE_FULLNAME: (state) => {
    state.fullName = state.fullName
  },
  STORE_EMAIL: (state) => {
    state.email = state.email
  },
  STORE_PASSWORD: (state) => {
    state.password = state.password
  },
}
const _getters = {
  get_fullName (state) { return state.fullName},
  get_email (state) { return state.email},
  get_password (state) { return state.password},
}

const moduleA = {
  state: { ..._state,
  },
  actions: { ..._actions,
  },
  mutations: { ..._mutations,
  },
  getters: { ..._getters,
  }
}
export default moduleA;
