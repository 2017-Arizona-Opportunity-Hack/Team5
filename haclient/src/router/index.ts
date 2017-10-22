import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/Components/Dashboard.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router)


var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard
    }
  ]
})

router.afterEach((to, from) => {
  window.document.title = <string>to.name
})

export default router;