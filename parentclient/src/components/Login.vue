<!--Log-in Modal-->
<template>
  <div class="login">
    <!-- TODO delete begin...-->
    <!--  NOTE:TESTING -->
    <!-- <h4>--</h4>
    <h4>--</h4>
    <h4>{{ get_fullName }}</h4>
    <h4>{{ get_email }}</h4>
    <h4>{{ get_password }}</h4> -->
    <!-- TODO delete /end-->
    <!-- Modal Trigger --> <!--check if can fix modal design: http://materializecss.com/modals.html-->
    <a class="waves-effect waves-red btn modal-trigger blue" href="#modal1">Login</a>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
          <!-- Form -->
          <form class="container">
            <div class="row" style="margin-bottom: -10px;">
              <!-- full_name field -->
              <div class="input-field col s6 m6">
                <i class="material-icons prefix">account_circle</i>
                <input id="full_name" type="text" class="validate" v-bind:value="fullName" @input="dispatch_load_fullName" >
                <label for="full_name">Full Name</label>
              </div>
              <!-- email field -->
              <div class="input-field col s6 m6">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate" v-bind:value="email" @input="dispatch_load_email" >
                <label for="email">Email</label>
              </div>

            </div>
            <!-- password field -->
            <div class="row" style="padding-left:12px;">
              <div class="input-field">
                <i class="material-icons prefix">edit</i>
                <input id="password" type="password" class="validate" v-bind:value="password" @input="dispatch_load_password" >
                <label for="password">Password</label>
              </div>
            </div>
            <!--submit button-->
            <div class="row" style="display: flex;align-items: center;justify-content: center;">
              <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat"  >SUBMIT</a><!-- v-onClick:"dispatch_load_form"; fullName, email, password -->
            </div><!-- TODO actions {validator, close modal, handle data} -->

          </form><!--/Form-->
      </div><!--/modal-content-->
    </div> <!--/modal-->
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: "login",
  //IMPORTANT NOTE: can only call this.$store via function, not arrow function.
  computed:{   //computed. used to replace vue's emit and app.vue data storage and pass via props to components.
    ...mapState({ //to bind input with state. To get when submited form.
      email: state => state.login.email,
      fullName: state => state.login.fullName,
      password: state => state.login.password,
    }),
    ...mapGetters({
      get_email: "get_email",
      get_fullName: "get_fullName",
      get_password: "get_password",
    }),
    check: function() { console.log("check: ", this.$store)}, //TODO detel this line
  },
  props: [],
  // data: () => data, //data must be a function for vue components, obj for vue object. //IGNORE - data placed in Login_module.js
  methods: {
    //DISPATCHERS - dispatches an action asynchronously.
      //would be cool to have a ...mapDispatchers({dispatch_load_email: {'LOAD_EMAIL', payloadMaybe}, ...})
    dispatch_load_email (payload) {
      //basic inputHandle //for basckspace and auto-complete
      this.$store.dispatch('LOAD_EMAIL', payload)
    },
    //TODO
    dispatch_load_form: (payload) => {
      //basic inputHandle //for basckspace and auto-complete
      this.$store.dispatch('LOAD_FORM', payload)
    },
    dispatch_load_fullName (payload) {
      //basic inputHandle //for basckspace and auto-complete
      console.log(payload)
      this.$store.dispatch('LOAD_FULLNAME', payload)
    },
    dispatch_load_password (payload) {
      //basic inputHandle //for basckspace and auto-complete
      this.$store.dispatch('LOAD_PASSWORD', payload)
    },
    /** TODO: ADD support for backspace and auto-complete.
     * NOTE: Below are what payloaded for certain input events.
     * //REGULAR (letter/number input)
    InputEvent{
    	bubbles: true,
    	cancelBubble: false,
    	cancelable: false,
    	composed: true,
    	currentTarget: null,
    	data: "S",
    	dataTransfer: null,
    	defaultPrevented: false,
    	detail: 0,
    	eventPhase: 0,
    	inputType: "insertText",
    	isComposing: false,
    	isTrusted: true,
    	returnValue: true,
    	sourceCapabilities: null,
    	path: {
    		...
    	},
    	srcElement{
    		...
    	},
    	target{
    		...
    	},
    	timeStamp: 4643.805,
    	type: "input",
    	view: null,
    	which: 0,
    }
     * //AUTO-COMPLETE
    Event{
    	bubbles: true,
    	cancelBubble: false,
    	cancelable: false,
    	composed: false,
    	currentTarget: null,
    	defaultPrevented: false,
    	eventPhase: 0,
    	isTrusted: true,
    	path: {
    		...
    	},
    	returnValue: true,
    	srcElement{
    		...
    	},
    	target{
    		...
    	},
    	timeStamp: 27032.155000000002,
    	type: "input",
    }
     * //BACKSPACE
    InputEvent{
    	bubbles: true,
    	cancelBubble: false,
    	cancelable: false,
    	composed: true,
    	currentTarget: null,
    	data: null,
    	dataTransfer: null,
    	defaultPrevented: false,
    	detail: 0,
    	eventPhase: 0,
    	inputType: "deleteContentBackward",
    	isComposing: false,
    	isTrusted: true,
    	path: {
    		...
    	},
    	returnValue: true,
    	sourceCapabilities: null,
    	srcElement{
    		...
    	},
    	target{
    		...
    	},
    	timeStamp: 27032.155000000002,
    	type: "input",
    	view: nullwhich: 0,
    }
     *
     */
  },
  mounted() {
    //modal animates
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
      //may need to add a jquery to obtain input submit biutton onClick
    });
  }
};
</script>


<style scoped>
/*TODO change modal style */
  .modal-content {
    background-color: #cccccc;
  }
/* Generic CSS */
  /* label color */
   .input-field label {
     color: #000;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #000;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #000;
   }
   h4 {
     color: black;
   }
</style>
