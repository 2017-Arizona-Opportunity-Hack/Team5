<template>
    <div class="card" ref="customInput">
        <input type="text" ref="displayer" @focus="focused=true" name="name-output" id="name-output" :value="checkedNames" @blur="stopBlur($event)">
        <div v-if="focused" class="list-group list-group-flush">
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

    data() {
        return {
            checkedItems: this.value,
            focused: false
        }
    },
    props: [
        "collectionSource", "multiple-select", "value"
    ],
    computed: {
        collection: function () {
            return this.$store.getters[this.collectionSource].map((item: any) => (
                { id: item.id, name: item.name }
            ));
        },
        checkedNames() {
            return this.value.map((itemid: number) => this.collection.filter((item: any) => item.id == itemid).map((item: any) => " " + item.name));
        }
    },
    watch: {
        "checkedItems": function () {
            this.$emit('input', this.checkedItems);
        }
    },
    methods: {
        stopBlur(event: any) {
            var target = event.explicitOriginalTarget;
            if (this.$refs.customInput.contains(target)) {
                console.log("clicked in!")
                this.$nextTick(() => {

                    this.$refs.displayer.focus();
                })
                console.log(this.$refs.displayer)
            } else {
                console.log("clicked out!")
                this.focused = false;
            }
        }
    }
}
</script>

<style lang="scss">

</style>
