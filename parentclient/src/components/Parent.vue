<template>
  <div class="container">
    <h1 id="welcome-msg">{{ msg }}</h1>
  
    <!-- Drop down Home selection -->
    <div class="container col m12">
      <!-- Home List information -->
      <div class="input-field selection-fields">
        <select id="selectedHome">
                <option value="" disabled selected>Choose your option</option>
                <!-- Each home object has the address and id. -->
                <option v-for="home in homeListings" :key="home.id">{{home.address}}</option>
              </select>
        <label>Home Selection</label>
      </div>
      <!-- Child List information -->
      <div v-show="showChildSelection" class="input-field selection-fields">
        <select id="selectedChild">
                <option value="" disabled selected>Choose your option</option>
                <option v-for="child in childListings" :key="child.id">{{child.name}}</option>
              </select>
        <label>Child Selection</label>
      </div>

      <!-- Toggle Child Away Status -->
      <!-- <div v-show="showChildSelection" v-on:click="toggleMedicineDetails"  class="switch" id="toggleChildStatus"> -->
        <div v-show="showChildSelection" class="switch" id="toggleChildStatus">
        <label>Child was away this weekend.</label>
        <br>
        <label>
              Off
              <input type="checkbox" id="switchChildStatus">
              <span class="lever" v-on:click="toggleMedicineViewing"></span>
              On
            </label>
      </div>

      <!-- Medicine List information -->
      <div v-show="showMedicineDetails" class=""  style="margin-bottom: 50px;">
        <h5>Medications</h5>
        <ul class="collection col s12">
          <!-- V for loop for listing different medications as li elements -->
          <li v-for="med in medicineListings" :key="med.id" class="collection-item avatar medicine-listings">
            <i class="material-icons circle">event_note</i>
            <span class="medicine-title">{{med.name}}</span><span style="margin-left: 15px;">Dosage: {{med.dosage + med.units}}</span>
            <p>Medication Taken:</p>
            
            <div class="container row">
              <div class="col m6 s6">
                <label for="datepicker">Date Taken:</label><input type="text" class="datepicker">
                <!-- <label for="datepicker">Date Taken:</label><input type="date" class="datepicker"> -->
              </div>
              <div class="col m6 s6">
                <label for="timepicker">Time Taken:</label><input type="text" class="timepicker">
                <!-- <label for="timepicker">Time Taken:</label><input type="time" class="timepicker"> -->
              </div>
            </div>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
          
        </ul>
      </div>
  
    </div>
  
  
  </div>
</template>

<script>
export default {
  name: "parentview",
  props: [],
  data: function() {
    return {
      msg: "Welcome to Your Sunshine Acres",
      homeListings: [],
      selectedHomeID: "",
      selectedChildID: "",
      childListings: [],
      medicineListings: [],
      showMedicineDetails: false,
      showChildSelection: false,
      dummyCounter: this.$store.state.counterState,
    };
  },
  methods: {
    toggleMedicineViewing: function() {
      // TODO: Fix toggle states
      // $('#switchChildStatus').prop('checked')
      this.showMedicineDetails = !this.showMedicineDetails;
    },
    toggleMedicineDetails: function(event) {
      this.medicineListings = [];
      // Child menu selection toggles medicineselection
      var selectedName = $("select#selectedChild").val();
      // console.log("Found child match", this.childListings.filter((child)=>(child.name == selectedName))[0].id);
      this.selectedChildID = this.childListings.filter(
        child => child.name == selectedName
      )[0].id;
      var urlGetPrescriptionByChild =
        "http://localhost:8000/prescription/bychildid/";
      urlGetPrescriptionByChild += this.selectedChildID;
      $.get(urlGetPrescriptionByChild, result => {
        // console.log("List of prescriptions", result);
        result.data.forEach(element => {
          // console.log(element);
          this.medicineListings.push(element);
        }, this);

        this.$nextTick(() => {
          // After all listened items are changed on DOM,
          // lets render/register components such as calendar.
          $(".datepicker").pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: "Today",
            clear: "Clear",
            close: "Ok",
            closeOnSelect: true, // Close upon selecting a date,
            format: "yyyy-mm-dd" //http://amsul.ca/pickadate.js/date/
          });
          $(".timepicker").pickatime({
            // Initialize time picker as well.
            default: "now", // Set default time: 'now', '1:30AM', '16:30'
            fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
            twelvehour: true, // Use AM/PM or 24-hour format
            donetext: "OK", // text for done-button
            cleartext: "Clear", // text for clear-button
            canceltext: "Cancel", // Text for cancel-button
            autoclose: true, // automatic close timepicker
            ampmclickable: true // make AM PM clickable
            // aftershow: function(){} //Function for after opening timepicker
          });
        });
      });
      // Toggle viewing
      if (!this.showChildSelection) {
        this.showMedicineDetails = !this.showMedicineDetails;
      } else {
        // Re-send API request.
        this.showMedicineDetails = true;
      }
    },
    toggleChildSelection: function(event) {
      // Home menu selection toggles childselection
      var selectedHome = $("select#selectedHome").val();
      // Match the address to retrieve the ID
      this.selectedHomeID = this.homeListings.filter(
        home => home.address == selectedHome
      )[0].id;
      // console.log($('select#selectedChild').val());
      if (!this.showChildSelection) {
        this.showChildSelection = !this.showChildSelection;
        this.showMedicineDetails = false;
      } else {
        // Re-send API request.
        this.showChildSelection = true;
      }
      // $.get("http://localhost:8000/child/", function(result) {
      var urlGetChildByHome = "http://localhost:8000/child/byhomeid/";
      urlGetChildByHome += this.selectedHomeID;
      $.get(
        urlGetChildByHome,
        function(result) {
          // console.log("List of childs", result);
          let retrievedChildren = [];
          result.data.forEach(function(element) {
            // console.log(element.address);
            retrievedChildren.push(element);
          }, this);
          this.childListings = retrievedChildren;
          // console.log("Acquired children", this.childListings);
          this.$nextTick(() => {
            $("select#selectedChild").material_select(
              this.toggleMedicineDetails.bind(this)
            );
          });
        }.bind(this)
      );
    }
  },
  mounted() {
    $(document).ready(
      function() {
        $.get(
          "http://localhost:8000/home/",
          function(result) {
            let retrievedHomes = [];
            result.data.forEach(function(element) {
              retrievedHomes.push(element);
            }, this);
            this.homeListings = retrievedHomes;
            // console.log(this.homeListings);
            this.$nextTick(() => {
              $("select#selectedHome").material_select(
                this.toggleChildSelection.bind(this)
              );
            });
          }.bind(this)
        );
        // Select is tag type, we can use # of id's after or . for classes
        $("select").material_select();
        // Basically saying that for material select bind the function call for toggling
        // children selection.
        // $("select").material_select(this.toggleMedicineDetails.bind(this));
        // $("select#selectedChild").material_select(this.grabChildInfo.bind(this));
        $("select#selectedChild").material_select(
          this.toggleMedicineDetails.bind(this)
        );
      }.bind(this)
    );
  },
  updated() {
      console.log($('#switchChildStatus').prop('checked'));
      // console.log(this.dummyCounter);
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

.collection-item {
  padding-bottom: 0;
}

#toggleChildStatus {
  margin-bottom: 40px;
}

.medicine-listings {
  margin-top: 10px;
}

.medicine-title {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: bold;
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
