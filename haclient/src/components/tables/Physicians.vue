<template>
    <div>
        <div class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Physicians</span>
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
                        <div class="col">
                            <p for="name">name</p>
                        </div>
                        <div class="col-sm-4">
                            <p for="name">name</p>
                        </div>
                        <div>
                            <i class="icon-pencil"></i>
                        </div>
                    </div>
                </div>
                <physician-item v-for="physician in physicians" :key="physician.id" :id="physician.id" />
                <div class="list-group-item">
                    <div class="btn btn-success" @click="addNew">New</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import PhysicianItem from "@/components/items/PhysicianItem";
import Physician from "@/store/classes/Physician";

export default Vue.extend({
  computed: {
    physicians() {
      return this.$store.getters.physicians;
    }
  },
  methods: {
    addNew() {
      this.$store.dispatch("createPhysician", new Physician(0, "", ""));
    }
  },
  components: {
    PhysicianItem
  }
});
</script>
<style lang="scss">

</style>