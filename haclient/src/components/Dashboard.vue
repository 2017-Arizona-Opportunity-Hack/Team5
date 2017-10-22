<template>
    <div class="row">
        <div class="col">
            <h1 class="display-3">Welcome</h1>
            <p>{{selectedChildren}}</p>
            Pick a table to enter data, or pick reports to generate reports.
            <picker collectionSource="children" multiple="true" v-model="selectedChildren"/>
        </div>
    </div>
</template>

<script lang="ts">
import Picker from "./Picker";
export default {
    data() {
        return {
            selectedChildren: []
        }
    },
    components: {Picker}
};
</script>

<style lang="scss" scoped>
h1 {
    font-style: italic;
    font-weight: 700;
}
</style>
