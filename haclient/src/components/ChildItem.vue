<template>
    <div class="list-group-item" :class="classObj">

        <div id="view" v-if="!editing">
            <div class="form-row align-items-center">
                <div class="col col-sm-1">
                    <input id="name" type="text" class="form-control-plaintext" v-model="child.id" disabled>
                </div>
                <div class="col col-sm-5">
                    <input id="name" type="text" class="form-control" v-model="child.name" disabled>
                </div>
                <div class="col col-sm-5">
                    <input id="name" type="text" class="form-control" v-model="child.home_id" disabled>
                </div>
                <button type="button" class="btn btn-block col-sm-1 btn-primary" @click="editing=true">Edit</button>
            </div>
        </div>
        <div id="edit" v-if="editing">
            <div class="form-row">
                <div class="col-sm-1">
                    <p for="name">id</p>
                </div>
                <div class="col-sm-4">
                    <p for="name">name</p>
                </div>
                <div class="col-sm-3">
                    <p for="home">home id</p>
                </div>
            </div>
            <div class="form-row align-items-center">
                <div class="col col-sm-1">
                    <input id="name" type="text" class="form-control-plaintext" v-model="child.id" disabled>
                </div>
                <div class="col col-sm-4">
                    <input id="name" type="text" class="form-control" v-model="child.name">
                </div>
                <div class="col-sm-4">
                    <input id="name" type="text" class="form-control" v-model="child.home_id">
                </div>
                <button type="button" class="btn col btn-danger" @click="editing=false">Cancel</button>
                <button type="button" class="btn col btn-success" @click="editing=false">Apply</button>
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
  props: ["child"],
  computed: {
    classObj: function() {
      return {
        "bg-dark": this.editing,
        "text-light": this.editing
      };
    }
  }
};
</script>

<style scoped lang="scss">
.btn.col {
  margin-left: 5px;
}
</style>
