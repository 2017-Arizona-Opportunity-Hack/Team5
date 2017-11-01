<template>
    <div class="" ref="customInput" :disabled="disabled">
        <input class="form-control" type="text" ref="displayer" @focus="focused=true" name="name-output" id="name-output" :value="checkedName" @blur="stopBlur($event)" :disabled="disabled">
        <div v-if="focused" class="list-group  lcard" :style="styleObj">
            <div class="form-check list-group-item" v-for="item in collection" :key="item.id">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" v-model="value" :value="item.id"> {{item.name}}
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

    data() {
        return {
            focused: false
        }
    },
    props: [
        "collectionSource", "multiple-select", "value", "disabled"
    ],
    computed: {
        collection: function ():any[] { //you need to type annotate computed properties, and for that I think we need typings from vuex
            return this.$store.getters[this.collectionSource].map((item: any) => (
                { id: item.id, name: item.name || item.address}
            ));
        },
        checkedName() {
            return  this.collection.filter((item: any) => item.id == this.value).map((item: any) => " " + item.name)[0];
        },
        styleObj(){
            return {
                width: window.getComputedStyle(this.$refs.displayer).width
            }
        }
    },
    watch: {
        "value": function () {//can't I bind to @input?
            this.$emit('input', this.value);
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
});
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
