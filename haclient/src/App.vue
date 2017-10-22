
<template>
    <div id="app">
      <tb-nav id="navWrap" />
      <div class="container-fluid">
        <router-view id="main"/>
      </div>
    </div>
</template>

<script lang="ts">
import Nav from "@/components/Nav.vue";

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
  },
  components: {
    "tb-nav": Nav
  }
};
</script>
<style lang="scss">
@import "./scss/main.scss";
#navWrap {
  width: 300px;
  float: left;
  height: 100vh;
}
#main {
  margin-left: 300px;
}
</style>
