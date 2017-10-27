<template>
    <div class="list-group-item" :class="classObj">

        <div id="view" v-if="!editing">
            <div class="form-row align-items-center">
                <div class="col-sm-1">
                    <input v-if="scrip.id!=0" id="id" type="text" class="form-control-plaintext" v-model="scrip.id" disabled>
                </div>
                <div class="col-sm-1">
                    <input id="physid" type="text" class="form-control" v-model="scrip.physician_id" disabled>
                </div>
                <div class="col-sm-1">
                    <input id="childid" type="text" class="form-control" v-model="scrip.child_id" disabled>
                </div>
                <div class="col">
                    <input id="name" type="text" class="form-control" v-model="scrip.name" disabled>
                </div>
                <div class="col">
                    <input id="reason" type="text" class="form-control" v-model="scrip.reason" disabled>
                </div>
                <div class="col col-sm-2">
                    <input id="dosage" type="text" class="form-control" :value="scrip.dosage + ' (' + scrip.units + ')'" disabled>
                </div>
                <div class="col-sm-1">
                    <input id="original_amount" type="text" class="form-control" :value="scrip.original_amount" disabled>
                </div>
                <div class="col-sm-2">
                    <input id="date" type="text" class="form-control" :value="scrip.date" disabled>
                </div>
                <!-- <button type="button" class="btn btn-block col-sm-1 btn-primary" @click="beginEdit"> -->
                <!-- <i class="icon-pencil"></i> -->
                <!-- </button> -->
                <a class="" href="#" @click="beginEdit">
                    <i class="icon-pencil"></i>
                </a>
            </div>

        </div>
        <div id="edit" v-if="editing">
            <div class="form-row align-items-center">
                <div class="form-group col-sm-1">
                    <label for="id">id</label>
                    <input id="id" type="text" class="form-control-plaintext" v-model="editableScrip.id" disabled>
                </div>
                <div class="form-group col-sm-1">
                    <label for="physid">physician</label>
                    <input id="physid" type="text" class="form-control" v-model="editableScrip.physician_id">
                </div>
                <div class="form-group col-sm-1">
                    <label for="childid">child</label>
                    <input id="childid" type="text" class="form-control" v-model="editableScrip.child_id">
                </div>
                <div class="form-group col">
                    <label for="name">name</label>
                    <input id="childid" type="text" class="form-control" v-model="editableScrip.name">
                </div>
                <div class="form-group col">
                    <label for="reason">reason</label>
                    <input id="reason" type="text" class="form-control" v-model="editableScrip.reason">
                </div>
                <div class="form-group col-sm-1">
                    <label for="dosage">dosage</label>
                    <input id="dosage" type="text" class="form-control" v-model="editableScrip.dosage">
                </div>
                <div class="form-group col-sm-1">
                    <label for="units">units</label>
                    <input id="units" type="text" class="form-control" v-model="editableScrip.units">
                </div>
                <div class="form-group col-sm-1">
                    <label for="original_amount">qty</label>
                    <input id="original_amount" type="text" class="form-control" v-model="editableScrip.original_amount">
                </div>
                <div class="form-group col">
                    <label for="date">date</label>
                    <input id="date" type="date" class="form-control" v-model="editableScrip.datestring">
                </div>
                <div class="form-group col">
                    <label for="time">time</label>
                    <input id="time" type="time" class="form-control" v-model="editableScrip.timestring">
                </div>
                <!-- <div class="col-sm-1"> -->
                <a href="#" class="text-danger" @click="cancelEdit">
                    <i class="icon-cancel"></i>
                </a>
                <a href="#" class="text-success" @click="applyEdit">
                    <i class="icon-ok"></i>
                </a>
                <!-- <button type="button" class="btn col btn-block btn-danger" @click="cancelEdit"><i class="icon-cancel"></i></button> -->
                <!-- <button type="button" class="btn col btn-block btn-success" @click="applyEdit"><i class="icon-ok"></i></button> -->

                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Child from "@/store/classes/Child";
import Prescription from "@/store/classes/Prescription";
export default {
    data() {
        return {
            editing: this.id == 0,
            editableScrip: (<any>Object).assign({},new Prescription(0, 0,0,"","","","",0,new Date()),{datestring:"",timestring:""})
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
        scrip: function (): Prescription {
            return this.$store.getters.specificScrip(this.id);
        }
    },
    methods: {
        padzero(s: string): string{
            return String("00" + s).slice(-2);
        },
        beginEdit: function () {
            console.debug(this.scrip.date.split("T"))
            this.editableScrip = (<any>Object).assign({}, this.scrip,{datestring:this.scrip.date.split("T")[0], timestring: this.scrip.date.split("T")[1]});
            this.editing = true;
        },
        cancelEdit: function () {
            this.editableScrip = (<any>Object).assign({}, this.scrip);
            if (this.scrip.id == 0) {
                this.$store.commit("deleteScrip", 0);
            }
            this.editing = false;
        },
        applyEdit: function () {
            console.debug(this.editableScrip.timestring)
            this.editableScrip.date = new Date(this.editableScrip.datestring+" "+this.editableScrip.timestring);
            console.debug(this.editableScrip.date);
            this.editableScrip.datestring = undefined;
            this.editableScrip.timestring = undefined;
            console.log("going to commit", this.editableScrip);
            this.$store.commit("updateScrip", this.editableScrip);
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
