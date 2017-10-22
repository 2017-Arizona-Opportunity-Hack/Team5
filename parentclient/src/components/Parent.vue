<template>
  <div class="container">
    <h1 id="welcome-msg">{{ msg }}</h1>
  
    <!-- Drop down Home selection -->
    <div class="container col m12">
      <!-- Home List information -->
      <div class="input-field selection-fields">
        <select id="selectedHome">
                <option value="" disabled selected>Choose your option</option>
                <option v-for="home in homeListings" :key="home.id">{{home}}</option>
              </select>
        <label>Home Selection</label>
      </div>
      <!-- Child List information -->
      <div v-show="showChildSelection" class="input-field selection-fields">
        <select id="selectedChild">
                <option value="" disabled selected>Choose your option</option>
                <option v-for="child in childListings" :key="child.id">{{child}}</option>
              </select>
        <label>Child Selection</label>
      </div>
      <h5>Medications</h5>
      <!-- Medicine List information -->
      <!-- <div class="input-field selection-fields">
        <select multiple id="selectedMedicine">
                <option value="" disabled selected>Choose your option</option>
                <option v-for="med in medicineListings" :key="med.id">{{med}}</option>
              </select>
        <label>Child Selection</label>
      </div> -->
  
      <div v-show="showMedicineDetails" class="">
        <ul class="collection col s12">
          <!-- V for loop for listing different medications as li elements -->
          <li class="collection-item avatar">
            <i class="material-icons circle">folder</i>
            <span class="title">Medicine 1</span>
            <p>Molly <br> Extra Info
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle">folder</i>
            <span class="title">Medicine 2</span>
            <p>Percocet <br> Mask off
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
        </ul>
      </div>
  
      <!-- Checkout -->
      <div class="switch" id="toggleChildStatus">
        <label>Child was away this weekend.</label>
        <br>
        <label>
              Off
              <input type="checkbox">
              <span class="lever"></span>
              On
            </label>
      </div>
  
    </div>
  
  
  </div>
</template>

<script>
export default {
  name: "parentview",
  props: [],
  data() {
    return {
      msg: "Welcome to Your Sunshine Acres",
      homeListings: ["Mesa", "Gilbert", "Chandler"],
      // childListings: [
      //   {

      //   },
      //   {

      //   },
      //   {

      //   },
      // ]
      childListings: ["Josh", "Ali", "James", "Chuck", "Saul"],
      medicineListings: ["Molly", "Perc", "Check", "Adderral"],
      showMedicineDetails: false,
      showChildSelection: false,
    };
  },
  methods: {
    // Child menu selection calls medicineselectiontoggle method.
    toggleMedicineDetails: function(event) {
      console.log($('select#selectedMedicine').val());
      if (!this.showChildSelection) {
        this.showMedicineDetails = !this.showMedicineDetails;
      } else {  // Re-send API request.
        this.showMedicineDetails = true;
      }
      // console.log("Toggling");
      // console.log($("#selectedMedicine").val("value"));
    },
    // Home menu selection calls childselectiontoggle method.
    toggleChildSelection: function(event) {
      console.log($('select#selectedChild').val());
      if (!this.showChildSelection) {
        this.showChildSelection = !this.showChildSelection;
        this.showMedicineDetails = false;
      } else {  // Re-send API request.
        this.showChildSelection = true;
      }
    }
  },
  mounted() {
    $(document).ready(
      function() {
        // Initialize selection jquery.
        $('select').material_select();
        // $("select").material_select(this.toggleMedicineDetails.bind(this));
        // Binding click on option item and invoking said method.
        // Basically saying that for material select bind the function call for toggling
        // children selection.
        $("select#selectedHome").material_select(this.toggleChildSelection.bind(this));
        $("select#selectedChild").material_select(this.toggleMedicineDetails.bind(this));
      }.bind(this)
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome-msg {
  margin-bottom: 100px;
}

.selection-fields {
  margin-bottom: 35px;
}

#toggleChildStatus {
  margin-bottom: 40px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
