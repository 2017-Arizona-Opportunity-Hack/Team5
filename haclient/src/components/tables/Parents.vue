<template>
  <div>
    <div class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Parents</span>
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
              <p>name</p>
            </div>
                        <div>
                            <i class="icon-pencil"></i>
                        </div>
          </div>
        </div>
        <parent-item v-for="parent in parents" :key="parent.id" :id="parent.id" />
        <div class="list-group-item">
          <div class="btn btn-success" @click="addNew">New</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ParentItem from "@/components/items/ParentItem";
import Parent from "@/store/classes/Parent";

export default {
    computed: {
        parents() {
            return this.$store.getters.parents
            }
    },
    methods:{
        addNew(){
            this.$store.dispatch("createParent", new Parent(0,""));
        }
    },
    components: {
        ParentItem
    }
}
</script>
