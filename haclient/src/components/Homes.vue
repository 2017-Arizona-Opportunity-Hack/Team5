<template>
  <div>
    <div class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Children</span>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div class="container-fluid">

      <div class="list-group">
        <div class="list-group-item" id="headers">
          <div class="form-row">
            <div class="col-sm-1">
              <p for="name">id</p>
            </div>
            <div class="col-sm-5">
              <p for="name">name</p>
            </div>
            <div class="col-sm-5">
              <p for="home">home id</p>
            </div>
          </div>
        </div>
        <child-item v-for="child in children" :key="child.id" :id="child.id" />
        <div class="list-group-item">
          <div class="btn btn-success" @click="addNew">New</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Home from "../store/classes/Home";
import ChildItem from "./ChildItem.vue";
export default {
  computed: {
    children() {
      return this.$store.getters.children;
    }
  },
  components: {
    ChildItem
  },
  methods: {
    addNew() {
      console.log(this.$store);
      this.$store.dispatch("createHome", new Home("", ""));
    }
  }
};
</script>

<style lang="scss" scoped>
.childrow {
  margin-bottom: 10px;
}
.container-fluid {
  padding: 20px;
}
#headers p {
  margin-bottom: 0;
}
</style>


