<template>
    <div class="card">
        <input type="text" name="id-output" id="id-output" :value="checkedItems">
        <input type="text" name="name-output" id="name-output" :value="checkedNames">
        <div class="list-group list-group-flush">
            <div class="form-check list-group-item" v-for="item in collection" :key="item.id">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="checkedItems" :value="item.id"> {{item.name}}
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {

    data(){
        return {
            checkedItems: this.value
        }
    },
    props: [
        "collectionSource", "multiple-select", "value"
    ],
    computed: {
        collection: function() {
            return this.$store.getters[this.collectionSource].map((item:any)=>(
                {id: item.id, name:item.name}
            ));
        },
        checkedNames(){
            return this.value.map((itemid: number)=>this.collection.filter((item: any)=>item.id==itemid).map((item: any)=>item.name));
        }
    },
    watch:{
        "checkedItems": function(){
            this.$emit('input', this.checkedItems);
        }
    },
    methods: {
        updateValue(value: number){

        }
    }
}
</script>

<style lang="scss">

</style>
