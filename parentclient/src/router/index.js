import Vue from 'vue'
import Router from 'vue-router'
import parentview from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parentview',
      component: parentview
    }
  ]
})
