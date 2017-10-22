<!--Log-in Modal-->
<!-- Modal Trigger -->
<template>
  <div class="login">
    <!-- Modal Trigger --> <!--check if can fix modal design: http://materializecss.com/modals.html-->
    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
          <!-- Form -->
          <form class="col s12">
            <div class="row">
              <div class="input-field">
                <i class="material-icons prefix">account_circle</i>
                <input id="full_name" type="text" class="validate" v-model="fullNameVal">
                <label for="full_name">Full Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate" v-model="emailVal">
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field">
                <input id="password" type="password" class="validate" v-model="passwordVal">
                <label for="password">Password</label>
              </div>
            </div>
            <!--submit button-->
            <div class="row">
              <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat ">SUBMIT</a>
            </div><!-- TODO actions {validator, close modal, handle data} -->
          </form><!--/Form-->
      </div><!--/modal-content-->
    </div> <!--/modal-->
  </div>
</template>

<script>
const data = {
  fullNameVal: "",
  emailVal: "",
  passwordVal: "",
}
export default {
  name: "login",
  props: [],
  data: () => data, //data must be a function for vue components, obj for vue object.
  methods: {

  },
  mounted() {
    //modal animates
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

  }
};
</script>

<style scoped>
/*TODO change modal style */
  .modal-content {
    background-color: gray;
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

</style>
