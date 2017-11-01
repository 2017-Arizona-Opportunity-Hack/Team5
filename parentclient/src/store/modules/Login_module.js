/*inital state*/
const _state = {
  email: "",
  fullName: "",
  password: "",
  zlastFormSubmission: {tries: 0},
}
const _actions = {
  //loads data.
  LOAD_EMAIL(context, payload) { //from docs: {state, commit, rootState}
    context.commit('STORE_EMAIL', payload.target.value)
  },
  LOAD_FORM(context, payload) {
    console.log("-anchor bstyle--payload-: ", payload);
    context.commit('STORE_FORM', payload)//doesn't do anything with payload.
  },
  LOAD_FULLNAME(context, payload) {
    context.commit('STORE_FULLNAME', payload.target.value)
  },
  LOAD_PASSWORD(context, payload) {
    context.commit('STORE_PASSWORD', payload.target.value)
  },
}
const _mutations = {
  //sets/stores the data obtained
  STORE_EMAIL: (state, payload) => {
    state.email = payload
  },
  STORE_FORM: (state, payload) => { //TODO
    state.zlastFormSubmission = {
        fullName: state.fullName,
        email: state.email,
        password: state.password,
        tries: state.zlastFormSubmission.tries += 1,
    }
  },
  STORE_FULLNAME: (state, payload) => {
    state.fullName = payload
  },
  STORE_PASSWORD: (state, payload) => {
    state.password = payload
  },
}
const _getters = {
  get_email: (state) => { return state.email},
  get_fullName: (state) => { return state.fullName},
  get_password: (state) => { return state.password},
}
const login_module = {
  state: { ..._state,
  },
  actions: { ..._actions,
  },
  mutations: { ..._mutations,
  },
  getters: { ..._getters,
  },
}
export default login_module;

//METHODS
//basic inputHandle for basckspace, auto-complete, and regular input. //IS not a validator (control what is allowed).
function handlePayload (payload){ //may need to pass mutation commit constant
  console.log(payload);
  const result = "";
  //check if input or backspace (InputEvent)
  if (payload.constructor.name == "InputEvent"){
    if (payload.inputType == "insertText"){
      //insertText
    }
    else if(payload.inputType == "deleteContentBackward"){
      //deleteContentBackward
    }
    else {
      console.log("Sorry, our input form does not handle InputEvent with inputType: ", payload.inputType);
    }
  }
  //else if is auto-complete (Event)
  else if (payload.constructor.name == "Event") {//&& payload.type == "input"

  }
  //else we don't have a handle for it.
  else {
    console.log("Sorry, our input form does not handle", payload.constructor.name);
  }
  // return result;
}
