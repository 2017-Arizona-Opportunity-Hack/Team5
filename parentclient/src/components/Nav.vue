<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Sunshine Acres</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <!-- <li><a href="sass.html">Sass</a></li> -->
        <!-- <li><a href="badges.html">Components</a></li> -->
        <!-- <li style="margin-right: 40px;"><a href="collapsible.html">Login</a></li> -->
        <login-modal></login-modal>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
//IMPORT COMPONENTS
import Login from "./Login.vue";

export default {
  name: 'navbar',
  components: {
    "login-modal": Login,
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.brand-logo {
    padding-left: 20px;
}

</style>
