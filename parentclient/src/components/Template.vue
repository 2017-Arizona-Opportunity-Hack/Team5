<!--Log-in Modal-->
<!-- Modal Trigger -->
<template>
  <div class="">
    <!-- insert component view layer-->
    <customComponentTagName></customComponentTagName>
  </div>
</template>

<script>
//IMPORT COMPONENTS
import importedComponentVar from "./Component.vue"

export default {
  name: "whatever",
  components: {
    "customComponentTagName": importedComponentVar,
  },
  props: [],
  data() {
  },
  methods: {
  },
  computed: {
    methodName() { //<tag>{{methodName}}</tag>, <tag v-for="info in methodName"></tag>,
      return this.$store.state.data
    }
  }
  mounted() {
  }
};
</script>

<style scoped>
</style>
