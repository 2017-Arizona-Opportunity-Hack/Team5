<template>
  <div class="container">
    <h1 id="welcome-msg">{{ msg }}</h1>
  
    <!-- Drop down Home selection -->
    <div class="container col m12">
  
      <div class="input-field selection-fields">
        <select>
                <!-- Turn this into a v-for loop with reactive data array of homes. -->
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Home 1</option>
                <option value="2">Home 2</option>
                <option value="3">Home 3</option>
              </select>
        <label>Home Selection</label>
      </div>
  
      <div class="input-field selection-fields">
        <select>
                <!-- Turn this into a v-for loop with reactive data array of homes. -->
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Child 1</option>
                <option value="2">Child 2</option>
                <option value="3">Child 3</option>
              </select>
        <label>Child Selection</label>
      </div>
      <h5>Medications</h5>
      
      <div class="input-field selection-fields">
        <select multiple>
                <!-- Turn this into a v-for loop with reactive data array of homes. -->
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Med 1</option>
                <option value="2">Med 2</option>
                <option value="3">Med 3</option>
              </select>
        <label>Child Selection</label>
      </div>
  
      <div class="">
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
    name: 'parentview',
    data() {
      return {
        msg: 'Welcome to Your Sunshine Acres'
      }
    }
  }
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
