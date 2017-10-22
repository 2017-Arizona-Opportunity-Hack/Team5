<template>
    <div class="list-group-item">
        <div class="form-row">
            <div class="col-sm-1">
                <label for="name">id</label>
            </div>
            <div class="col-sm-5">
                <label for="name">name</label>
            </div>
            <div class="col-sm-5">
                <label for="home">home id</label>
            </div>
        </div>
        <div class="form-row align-items-center">
            <div class="col col-sm-1">
                <input id="name" type="text" class="form-control" v-model="child.id" disabled>
            </div>
            <div class="col col-sm-5">
                <input id="name" type="text" class="form-control" v-model="child.name" disabled>
            </div>
            <div class="col col-sm-5">
                <input id="name" type="text" class="form-control" v-model="child.home_id" disabled>
            </div>
            <div class="col col-sm-1">
                <a href="#" class="btn btn-primary">Edit</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      editing: false
    };
  },
  props: ["child"]
};
</script>
