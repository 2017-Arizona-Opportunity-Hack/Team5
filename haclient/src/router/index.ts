import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard.vue'
import Children from '@/components/tables/Children.vue'
import Homes from '@/components/tables/Homes.vue'
import Parents from '@/components/tables/Parents.vue'
import Prescriptions from '@/components/tables/Prescriptions.vue'
import Physicians from '@/components/tables/Physicians.vue'
import Reports from '@/components/Reports.vue'

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
      path: '/parents',
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
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    }
  ],
  linkExactActiveClass: "active",
  mode: "history"
})

router.afterEach((to, from) => {
  window.document.title = <string>to.name
})

export default router;