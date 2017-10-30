<template>
  <div class="container" style="font-family: 'Montserrat', sans-serif;">
    <h1 id="welcome-msg" style="display: flex;align-items: center;justify-content: center;">{{ msg }}</h1>
  
    <!-- Drop down Home selection -->
    <div class="container col m12">
      <!-- Home List information -->
      <div class="input-field selection-fields">
        <select id="selectedHome">
                <option value="" disabled selected>Choose your option</option>
                <!-- Each home object has the address and id. -->
                <option v-for="home in homes" :key="home.id">{{home.address}}</option>
              </select>
        <label>Home Selection</label>
      </div>
      <!-- Child List information -->
      <div v-show="showChildSelection" class="input-field selection-fields">
        <select id="selectedChild">
                <option value="" disabled selected>Choose your option</option>
                <option v-for="child in children" :key="child.id">{{child.name}}</option>
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
          <li v-for="med in medications" :key="med.id" class="collection-item avatar medicine-listings">
            <medicineCard :med="med" :medChildID="selectedChildID"></medicineCard>
          </li>
          
        </ul>
      </div>
  
    </div>
  
  
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import MedicineCard from './MedicineCard';

export default {
  name: "parentview",
  props: [],
  components: {
    'medicineCard' : MedicineCard,
  },
  data: function() {
    return {
      msg: "Welcome to Sunshine Acres",
      homeListings: [],
      selectedHomeID: "",
      selectedChildID: "",
      addTimeShow: true,
      successShowTime: false,
      selectedPrescriptionID: "",
      childListings: [],
      medicineListings: [],
      showMedicineDetails: false,
      showChildSelection: false,
    };
  },
  computed: {
    homes() {
      this.homeListings = this.$store.getters.getHomes;
      this.$nextTick(() => {
        $("select#selectedHome").material_select(
          this.toggleChildSelection.bind(this)
        );
      });
      return this.homeListings;
    },
    children() {
      this.childListings = this.$store.getters.getChildren;
      this.$nextTick(() => {
        $("select#selectedChild").material_select(
          this.toggleMedicineDetails.bind(this)
        );
      });
      return this.childListings;
    },
    medications() {
      this.medicineListings = this.$store.getters.getMedication;
      // console.log("Here is the medications retrieved:\t", this.childListings);
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
            twelvehour: false, // Use AM/PM or 24-hour format
            donetext: "OK", // text for done-button
            cleartext: "Clear", // text for clear-button
            canceltext: "Cancel", // Text for cancel-button
            autoclose: true, // automatic close timepicker
            ampmclickable: true // make AM PM clickable
            // aftershow: function(){} //Function for after opening timepicker
          });
        });
      return this.medicineListings;
    },
  },
  mounted() {
    $(document).ready(
      function() {
        // Select is tag type, we can use # of id's after or . for classes
        $("select").material_select();
        $("select#selectedHome").material_select(
          this.toggleChildSelection.bind(this)
        );
        // Basically saying that for material select bind the function call for toggling
        // children selection.
        // $("select#selectedChild").material_select(this.grabChildInfo.bind(this));
        $("select#selectedChild").material_select(
          this.toggleMedicineDetails.bind(this)
        );
      }.bind(this)
    );
  },
  methods: {
    turnOffOtherFields: function() {
      console.log("Chosen");
      if (this.showChildSelection) {
        this.showMedicineDetails = false;
        this.showChildSelection = false;
        this.successShowTime = false;
        this.addTimeShow = true;
      }
    },
    toggleMedicineViewing: function() {
      this.showMedicineDetails = !this.showMedicineDetails;
    },
    toggleMedicineDetails: function(event) {
      this.medicineListings = [];
      this.successShowTime = false;
      this.addTimeShow = true;
      // Child menu selection toggles medicineselection
      var selectedName = $("select#selectedChild").val();
      // console.log("Found child match", this.childListings.filter((child)=>(child.name == selectedName))[0].id);
      this.selectedChildID = this.childListings.filter(
        child => child.name == selectedName
      )[0].id;

      this.$store.dispatch('getChildMediciationListingFromServer', {
        childID: this.selectedChildID,
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
      this.successShowTime = false;
      this.addTimeShow = true;
      // Home menu selection toggles childselection
      var selectedHome = $("select#selectedHome").val();
      // Match the address to retrieve the ID
      this.selectedHomeID = this.homeListings.filter(
        home => home.address == selectedHome
      )[0].id;
      // To invoke a store action, we must dispatch it and pass 
      // object parameter to be our payload.
      this.$store.dispatch('getChildrenListingsFromServer', {
        homeID: this.selectedHomeID,
      });
      // console.log($('select#selectedChild').val());
      if (!this.showChildSelection) {
        this.showChildSelection = !this.showChildSelection;
        this.showMedicineDetails = false;
      } else {
        // Re-send API request.
        this.showChildSelection = true;
      }
    }
  },
};
</script>

<!-- No "scoped" attribute becuase we want all descendants of this component to share this CSS attibutes. -->
<style>
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
