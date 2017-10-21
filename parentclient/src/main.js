// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'

Vue.config.productionTip = false

// Initialize dynamically generated select element.
$(document).ready(function() {
  $('select').material_select();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
