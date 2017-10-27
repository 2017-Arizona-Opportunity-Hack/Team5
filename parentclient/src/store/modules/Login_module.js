/*inital state*/
const _state = {
  email: "",
  fullName: "",
  password: "",
}
const _actions = {
  //loads data.
  LOAD_EMAIL(context, payload) { //from docs: {state, commit, rootState}
    context.commit('STORE_EMAIL', payload.data)
  },
  LOAD_FORM(context, payload) {//TODO
    context.commit('STORE_FORM', payload)
  },
  LOAD_FULLNAME(context, payload) {
    context.commit('STORE_FULLNAME', payload.data)
  },
  LOAD_PASSWORD(context, payload) {
    context.commit('STORE_PASSWORD', payload.data)
  },
}
/**TODO: fix mutation to store a payload correctly*/
const _mutations = {
  //sets/stores the data obtained
  STORE_EMAIL: (state, payload) => {
    state.email += payload
  },
  STORE_FORM: (state, payload) => {
    state = {
      fullName: payload.fullName,
      email: payload.email,
      password: payload.password,
    } //fullName: payload.fullName, email: payload.email, password: payload.password
  },
  STORE_FULLNAME: (state, payload) => {
    state.fullName+= payload
  },
  STORE_PASSWORD: (state, payload) => {
    state.password += payload
  },
}
const _getters = {
  get_email: (state) => { return state.email},
  get_fullName: (state) => { return state.fullName},
  get_password: (state) => { return state.password},
}
const moduleA = {
  state: { ..._state,
  },
  actions: { ..._actions,
  },
  mutations: { ..._mutations,
  },
  getters: { ..._getters,
  },
}
export default moduleA;
