<template>
   <nav>
    <div class="nav-wrapper" style="background: #7cbfda;">
      <a href="#" class="brand-logo" style="padding-left: 35px;text-transform: uppercase;letter-spacing: 0.11em;">Sunshine Acres</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <!-- <li><a href="sass.html">Sass</a></li> -->
        <!-- <li><a href="badges.html">Components</a></li> -->
        <!-- <li style="margin-right: 40px;"><a href="collapsible.html">Login</a></li> -->
        <login-modal style="padding-right: 50px;"></login-modal>
      </ul>
    </div>
  </nav>
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
