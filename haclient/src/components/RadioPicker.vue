<template>
    <div class="" ref="customInput" :disabled="disabled">
        <input class="form-control" type="text" ref="displayer" @focus="focused=true" name="name-output" id="name-output" :value="checkedName" @blur="stopBlur($event)" :disabled="disabled">
        <div v-if="focused" class="list-group  lcard" :style="styleObj">
            <div class="form-check list-group-item" v-for="item in collection" :key="item.id">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" v-model="checkedItem" :value="item.id"> {{item.name}}
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {

    data() {
        return {
            checkedItem: this.value,
            focused: false
        }
    },
    props: [
        "collectionSource", "multiple-select", "value", "disabled"
    ],
    computed: {
        collection: function () {
            return this.$store.getters[this.collectionSource].map((item: any) => (
                { id: item.id, name: item.name || item.address}
            ));
        },
        checkedName() {
            return  this.collection.filter((item: any) => item.id == this.checkedItem).map((item: any) => " " + item.name)[0];
        },
        styleObj(){
            return {
                width: window.getComputedStyle(this.$refs.displayer).width
            }
        }
    },
    watch: {
        "checkedItem": function () {
            this.$emit('input', this.checkedItem);
        }
    },
    methods: {
        stopBlur(event: any) {
            var target = event.explicitOriginalTarget;
            if (this.$refs.customInput.contains(target)) {
                console.log("clicked in!")
                this.$nextTick(() => {
                    console.log(this.$refs.displayer)
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

<style scoped lang="scss">
    input[type="text"]{
        // border: none;
        margin: 0;
        display: block;
    }
    card{
        padding: 0;
    }
    .lcard{
        position: absolute;
        z-index: 3000;
        top: 70px;
        display: block;
        // width: 30vw;
        // float: left;
    }
</style>
