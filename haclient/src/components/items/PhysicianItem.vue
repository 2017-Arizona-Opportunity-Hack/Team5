
<template>
    <div class="list-group-item" :class="classObj">
        <div id="view" v-if="!editing">
            <div class="form-row align-items-center">
                <div class="col col-sm-1">
                    <input v-if="physician.id!=0" id="id" type="text" class="form-control-plaintext" v-model="physician.id" disabled>
                </div>
                <div class="col col">
                    <input id="name" type="text" class="form-control" v-model="physician.name" disabled>
                </div>
                <div class="col col-sm-4">
                    <input id="phone" type="text" class="form-control" v-model="physician.phone" disabled>
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
                    <input id="id" type="text" class="form-control-plaintext" v-model="editablePhysician.id" disabled>
                </div>
                <div class="form-group col">
                    <label for="name">name</label>
                    <input id="name" type="text" class="form-control" v-model="editablePhysician.name">
                </div>
                <div class="form-group col-sm-4">
                    <label for="phone">phone</label>
                    <input id="phone" type="text" class="form-control" v-model="editablePhysician.phone_number">
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
import Vue from 'vue';
import Physician from "@/store/classes/Physician";
export default Vue.extend({
    data() {
        return {
            editing: this.id == 0,
            editablePhysician: new Physician(0, "", "")
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
        physician: function () {
            return this.$store.getters.specificPhysician(this.id);
        }
    },
    methods: {
        beginEdit: function () {
            this.editablePhysician = (<any>Object).assign({}, this.physician);
            this.editing = true;
        },
        cancelEdit: function () {
            this.editablePhysician = (<any>Object).assign({}, this.physician);
            if (this.physician.id == 0) {
                this.$store.commit("deletePhysician", 0);
            }
            this.editing = false;
        },
        applyEdit: function () {
            console.log("going to commit", this.editablePhysician);
            this.$store.commit("updatePhysician", this.editablePhysician);
            this.editing = false;
        }
    }
});
</script>

<style scoped lang="scss">
.btn.col {
    margin-left: 5px;
}
</style>