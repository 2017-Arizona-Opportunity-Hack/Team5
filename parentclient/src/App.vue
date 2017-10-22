<template>
  <div id="app">
    <tb-nav class=""></tb-nav>
    <router-view/>
  </div>
</template>

<script>
//IMPORT COMPONENTS
import Nav from "./components/Nav";

export default {
  name: 'app',
  components: {
        "tb-nav": Nav,
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
