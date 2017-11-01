<template>
    <div>
        <div class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Welcome</span>

        </div>

        <!-- <p>{{selectedChildren}}</p> -->
        <div class="container-fluid">

        Pick a table to enter data, or pick reports to generate reports.
        </div>
        <!-- <picker collectionSource="children" multiple="true" v-model="selectedChildren"/> -->
    </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Picker from "./Picker";
export default Vue.extend({
    data() {
        return {
            selectedChildren: []
        }
    },
    components: { Picker }
});
</script>

<style lang="scss" scoped>
h1 {
    font-style: italic;
    font-weight: 700;
}
</style>
