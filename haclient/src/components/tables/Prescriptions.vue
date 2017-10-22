<template>
    <div>
        <div class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Prescriptions</span>
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
                        <div class="col-sm-1">
                            <p>physician</p>
                        </div>
                        <div class="col-sm-1">
                            <p>child</p>
                        </div>
                        <div class="col">
                            <p>name</p>
                        </div>
                        <div class="col">
                            <p>reason</p>
                        </div>
                        <div class="col col-sm-2">
                            <p>dosage(units)</p>
                        </div>
                        <div class="col-sm-1">
                            <p>qty</p>
                        </div>
                        <div class="col-sm-2">
                            <p>date</p>
                        </div>
                        <div class="">

                            <i class="icon-pencil"></i>
                        </div>
                    </div>
                </div>
                <prescription-item v-for="scrip in prescriptions" :key="scrip.id" :id="scrip.id" />
                <div class="list-group-item">
                    <div class="btn btn-success" @click="addNew">New</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Prescription from "@/store/classes/Prescription";
import PrescriptionItem from "@/components/items/PrescriptionItem.vue";
export default {
    computed: {
        prescriptions() {
            return this.$store.getters.prescriptions;
        }
    },
    components: {
        PrescriptionItem
    },
    methods: {
        addNew() {
            this.$store.dispatch("createScrip", new Prescription(0,0,0,"","","","",0,new Date()));
         }
    }
};
</script>
