<template>
    <div id="app">
        {{num}}
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script lang="ts">
export default {
  name: "app",
  data: function() {
    return {
      test: <string>"Hi there"
    };
  },
  computed: {
    num() {
      return this.$store.getters.numberOfChildren;
    }
  },
  mounted() {
    window.setTimeout(
      function() {
        console.log("hi there");
        this.$store.commit("newChild", 14);
      }.bind(this),
      600
    );
    this.$store.commit("newChild", 12);
    this.$store.commit("newChild", 100);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
