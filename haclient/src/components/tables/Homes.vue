<template>
  <div>
    <div class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Homes</span>
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
              <p>id</p>
            </div>
            <div class="col">
              <p>address</p>
            </div>
            <div class="col-sm-4">
              <p>phone</p>
            </div>
                    <i class="icon-pencil"></i>
          </div>
        </div>
        <home-item v-for="home in homes" :key="home.id" :id="home.id" />
        <div class="list-group-item">
          <div class="btn btn-success" @click="addNew">New</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Home from "@/store/classes/Home";
import HomeItem from "@/components/items/HomeItem.vue";
import {homeDict} from "@/store/storedicts";
export default {
  computed: {
    homes(): homeDict{
      return <homeDict>(this.$store.getters.homes);
    }
  },
  components: {
    HomeItem
  },
  methods: {
    addNew() {
      console.log(this.$store);
      this.$store.dispatch("createHome", new Home(0, "", ""));
    }
  },
  mounted(){
      this.homes
  }
}
</script>

<style lang="scss" scoped>
.childrow {
  margin-bottom: 10px;
}

#headers p {
  margin-bottom: 0;
}
</style>


