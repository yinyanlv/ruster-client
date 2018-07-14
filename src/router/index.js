import Vue from 'vue'
import Router from 'vue-router'

import MasterLayout from '../layouts/MasterLayout'

import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: MasterLayout,
      children: [
        {
          path: '/',
          component: Home
        }
      ]
    }
  ]
})
