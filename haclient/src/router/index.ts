import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/Components/Dashboard.vue'
import Children from '@/Components/Children.vue'
import Homes from '@/Components/Homes.vue'
import Parents from '@/Components/Parents.vue'
import Prescriptions from '@/Components/Prescriptions.vue'
import Physicians from '@/Components/Physicians.vue'

Vue.use(Router)


var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard
    },
    {
      path: '/children',
      name: 'Children',
      component: Children
    },
    {
      path: '/homes',
      name: 'Homes',
      component: Homes
    },
    {
      path: '/parenst',
      name: 'Parents',
      component: Parents
    },
    {
      path: '/prescriptions',
      name: 'Prescriptions',
      component: Prescriptions
    },
    {
      path: '/physicians',
      name: 'Physicians',
      component: Physicians
    }
  ],
  linkExactActiveClass: "active",
  mode: "history"
})

router.afterEach((to, from) => {
  window.document.title = <string>to.name
})

export default router;