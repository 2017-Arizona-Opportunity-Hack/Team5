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
              <input type="checkbox">
              <span class="lever"></span>
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
            <span class="medicine-title">{{med}}</span><p>Medication Taken:</p>
            
            <div class="container row">
              <div class="col m6 s6">
                <label for="datepicker">Date Taken:</label>
                <input type="text" class="datepicker">
              </div>
              <div class="col m6 s6">
                <label for="timepicker">Time Taken:</label>
                <input type="text" class="timepicker">
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
      homeListings: ["Mesa", "Gilbert", "Chandler"],
      childListings: [
        {
          name: "Josh",
          medicine: ["Molly", "Perc", "Lean"]
        },
        {
          name: "Ali",
          medicine: ["Devils Lettuce", "Mary J", "Ganja"]
        },
        {
          name: "James",
          medicine: ["Bailey", "Jack", "Svedka"]
        },
        {
          name: "Chuck",
          medicine: ["Soylent", "Cheetos", "Pancakes"]
        },
        {
          name: "Saul",
          medicine: ["Apple", "Xanax", "Peach"]
        }
      ],
      medicineListings: [],
      showMedicineDetails: false,
      showChildSelection: false
    };
  },
  methods: {
    toggleMedicineDetails: function() {
      this.showMedicineDetails = !this.showMedicineDetails;
    },
    toggleMedicineDetails: function(event) {
      // Child menu selection toggles medicineselection
      if (!this.showChildSelection) {
        this.showMedicineDetails = !this.showMedicineDetails;
      } else {
        // Re-send API request.
        this.showMedicineDetails = true;
      }
      var selectedName = $("select#selectedChild").val();
      // console.log(selectedName);
      // console.log(this.childListings.filter((child)=>(child.name == selectedName))[0].medicine);
      this.medicineListings = this.childListings.filter(
        child => child.name == selectedName
      )[0].medicine;
      // console.log("Selected Medicine", this.medicineListings);

      // After all listened items are changed on DOM,
      // lets render/register components such as calendar.
      this.$nextTick(() => {
        $(".datepicker").pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15, // Creates a dropdown of 15 years to control year,
          today: "Today",
          clear: "Clear",
          close: "Ok",
          closeOnSelect: true, // Close upon selecting a date,
          format: "yyyy-mm-dd" //http://amsul.ca/pickadate.js/date/
        });
        // Initialize time picker as well.
        $(".timepicker").pickatime({
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
    },
    toggleChildSelection: function(event) {
      // Home menu selection toggles childselection
      // console.log($('select#selectedChild').val());
      if (!this.showChildSelection) {
        this.showChildSelection = !this.showChildSelection;
        this.showMedicineDetails = false;
      } else {
        // Re-send API request.
        this.showChildSelection = true;
      }
      $.get("http://localhost:8000/child/", function(result) {
        console.log("List of childs", result);
        // Vue.set(this.posts[uID], post.post._id, post.post)
      });

      $.get("http://localhost:8000/home/", function(result) {
        console.log("List of homes", result);
        // Vue.set(this.posts[uID], post.post._id, post.post)
      });

      $.get("http://localhost:8000/prescription/", function(result) {
        console.log("List of prescriptions", result);
        // Vue.set(this.posts[uID], post.post._id, post.post)
      });
      
    },
    grabChildInfo: function(event) {
      console.log("Chosen Child", $("select#selectedChild").val());
    }
  },
  mounted() {
    $(document).ready(
      function() {
        $("select").material_select();
        // $("select").material_select(this.toggleMedicineDetails.bind(this));
        // Basically saying that for material select bind the function call for toggling
        // children selection.
        $("select#selectedHome").material_select(
          this.toggleChildSelection.bind(this)
        );
        // $("select#selectedChild").material_select(this.grabChildInfo.bind(this));
        $("select#selectedChild").material_select(
          this.toggleMedicineDetails.bind(this)
        );
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
