
<template>
  <div id="app">
    <tb-nav id="navWrap" />
    <router-view id="main" />
  </div>
</template>

<script lang="ts">
import Child from "./store/classes/Child";
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
    this.$store.commit("newChild", new Child(12, "Chuck", 0));
    this.$store.commit("newChild", new Child(19, "James", 0));
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
  background: url("/static/mountain.jpg");
  background-size: cover;
  background-position: center center;
}
#main {
  margin-left: 300px;
}
</style>
