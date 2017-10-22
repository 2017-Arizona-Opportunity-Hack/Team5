<template>
    <div class="list-group-item" :class="classObj">

        <div id="view" v-if="!editing">
            <div class="form-row align-items-center">
                <div class="col col-sm-1">
                    <input v-if="parent.id!=0" id="id" type="text" class="form-control-plaintext" v-model="parent.id" disabled>
                </div>
                <div class="col">
                    <input id="name" type="text" class="form-control" v-model="parent.name" disabled>
                </div>
                <a class="" href="#" @click="beginEdit">
                    <i class="icon-pencil"></i>
                </a>
            </div>

        </div>
        <div id="edit" v-if="editing">
            <div class="form-row align-items-center">
                <div class="form-group col col-sm-1">
                    <label for="id">id</label>
                    <input id="id" type="text" class="form-control-plaintext" v-model="editableParent.id" disabled>
                </div>
                <div class="form-group col">
                    <label for="name">name</label>
                    <input id="name" type="text" class="form-control" v-model="editableParent.name">
                </div>
                <a href="#" class="text-danger" @click="cancelEdit">
                    <i class="icon-cancel"></i>
                </a>
                <a href="#" class="text-success" @click="applyEdit">
                    <i class="icon-ok"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Parent from "@/store/classes/Parent";
export default {
    data() {
        return {
            editing: this.id == 0,
            editableParent: new Parent(0,"");
        };
    },
    props: ["id"],
    computed: {
        classObj: function () {
            return {
                "bg-light": this.editing,
                "text-dark": this.editing
            };
        },
        parent: function () {
            return this.$store.getters.specificParent(this.id);
        }
    },
    methods: {
        beginEdit: function () {
            this.editableParent = (<any>Object).assign({}, this.parent);
            this.editing = true;
        },
        cancelEdit: function () {
            this.editableParent = (<any>Object).assign({}, this.parent);
            if (this.parent.id == 0) {
                this.$store.commit("deleteParent", 0);
            }
            this.editing = false;
        },
        applyEdit: function () {
            console.log("going to commit", this.editableParent);
            this.$store.commit("updateParent", this.editableParent);
            this.editing = false;
        }
    }
};
</script>

<style scoped lang="scss">

</style>
