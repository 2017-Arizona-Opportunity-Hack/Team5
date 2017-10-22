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
                <button type="button" class="btn btn-block col-sm-1 btn-primary" @click="beginEdit">Edit</button>
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
                    <input id="name" type="text" class="form-control-plaintext" v-model="editableChild.id" disabled>
                </div>
                <div class="col col-sm-4">
                    <input id="name" type="text" class="form-control" v-model="editableChild.name">
                </div>
                <div class="col-sm-4">
                    <input id="name" type="text" class="form-control" v-model="editableChild.home_id">
                </div>
                <button type="button" class="btn col btn-danger" @click="cancelEdit">Cancel</button>
                <button type="button" class="btn col btn-success" @click="applyEdit">Apply</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Child from "../store/classes/Child";
export default {
  data() {
    return {
      editing: false,
      editableChild: new Child(0, "nothing")
    };
  },
  props: ["id"],
  computed: {
    classObj: function() {
      return {
        "bg-dark": this.editing,
        "text-light": this.editing
      };
    },
    child: function() {
      return this.$store.getters.specificChild(this.id);
    }
  },
  methods: {
    beginEdit: function() {
      this.editableChild = (<any>Object).assign({}, this.child);
      this.editing = true;
    },
    cancelEdit: function() {
      this.editableChild = (<any>Object).assign({}, this.child);
      this.editing = false;
    },
    applyEdit: function() {
      console.log("going to commit", this.editableChild);
      this.$store.commit("updateChild", this.editableChild);
      this.editing = false;
    }
  }
};
</script>

<style scoped lang="scss">
.btn.col {
  margin-left: 5px;
}
</style>
