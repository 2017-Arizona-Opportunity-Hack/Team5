
<template>
    <div class="list-group-item" :class="classObj">
        <div id="view" v-if="!editing">
            <div class="form-row align-items-center">
                <div class="col col-sm-1">
                    <input v-if="home.id!=0" id="name" type="text" class="form-control-plaintext" v-model="home.id" disabled>
                </div>
                <div class="col">
                    <picker id="parents" collectionSource="parents"  v-model="parents" disabled />
                </div>
                <div class="col col-sm-3">
                    <input id="address" type="text" class="form-control" v-model="home.address" disabled>
                </div>
                <div class="col col-sm-3">
                    <input id="phone" type="text" class="form-control" v-model="home.phone" disabled>
                </div>
                <a class="" href="#" @click="beginEdit">
                    <i class="icon-pencil"></i>
                </a>
            </div>
        </div>
        <div id="edit" v-if="editing">
            <div class="form-row align-items-center">
                <div class="form-group col col-sm-1">
                    <label for="name">id</label>
                    <input id="name" type="text" class="form-control-plaintext" v-model="editableHome.id" disabled>
                </div>
                <div class="form-group col">
                    <label for="parents">parents</label>
                    <!-- <input id="parents" type="text" class="form-control" v-model="editableHome.address"> -->
                    <picker id="parents" collectionSource="parents"  v-model="parents" />
                </div>
                <div class="form-group col-sm-3">
                    <label for="address">address</label>
                    <input id="address" type="text" class="form-control" v-model="editableHome.address">
                </div>
                <div class="form-group col-sm-3">
                    <label for="phone">phone</label>
                    <input id="phone" type="text" class="form-control" v-model="editableHome.phone">
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
import Picker from "@/components/Picker";
import Home from "@/store/classes/Home";
export default {
    data() {
        return {
            editing: this.id == 0,
            editableHome: new Home(0, "", ""),
            parents: this.$store.getters.parentsByHomeId(this.id)
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
        home: function () {
            return this.$store.getters.specificHome(this.id);
        }
    },
    methods: {
        beginEdit: function () {
            this.editableHome = (<any>Object).assign({}, this.home);
            this.editing = true;
        },
        cancelEdit: function () {
            this.editableHome = (<any>Object).assign({}, this.home);
            if (this.home.id == 0) {
                this.$store.commit("deleteHome", 0);
            }
            this.editing = false;
        },
        applyEdit: function () {
            console.log("You should commit these parents to this house ", this.parents)

            console.log("going to commit", this.editableHome);
            this.parents.forEach((parent: any)=>{
                this.$store.dispatch("associateParentHome", {home_id: this.home.id, parent_id: parent});
            })
            this.$store.commit("updateHome", this.editableHome);
            this.editing = false;
        }
    },
    components: {
        Picker
    }
};
</script>

<style scoped lang="scss">
.btn.col {
    margin-left: 5px;
}
</style>
