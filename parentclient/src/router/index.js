import Vue from 'vue'
import Router from 'vue-router'
import parentview from '@/components/Parent'
// import login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parentview',
      component: parentview
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
  ]
})
