<template>
  <ul>
      <li v-for="child in children" :key="child.id">{{child.name}}</li>
  </ul>
</template>

<script lang="ts">
export default {
  computed: {
    children() {
      return this.$store.getters.children;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>


