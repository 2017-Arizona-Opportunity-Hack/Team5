
<template>
    <div id="app">
        <tb-nav id="navWrap" />
        <router-view id="main" />
    </div>
</template>

<script lang="ts">
import Child from "./store/classes/Child";
import Nav from "@/components/Nav.vue";

export default {
    name: "app",
    data: function () {
        return {
            test: <string>"Hi there"
        };
    },
    computed: {
        num() {
            return this.$store.getters.numberOfChildren;
        }
    },
    mounted() {
        this.$store.dispatch("init");
    },
    components: {
        "tb-nav": Nav
    }
};
</script>
<style lang="scss">
@import "../static/icons/css/icons.css";
@import "./scss/main.scss";
#navWrap {
    position: fixed;
    width: 300px;
    // float: left;
    overflow: auto;
    height: 100vh;
    background: #333;
    background: url("/static/mountain.jpg");
    background-size: cover;
    background-position: center center;
}
#main {
    margin-left: 300px;
}
</style>
