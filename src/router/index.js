import Vue from 'vue'
import Router from 'vue-router'

import MasterLayout from '../layouts/MasterLayout'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Forgot from '../pages/Forgot'
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
          path: '/login',
          component: Login
        },
        {
          path: '/register',
          component: Register
        },
        {
          path: '/forgot',
          component: Forgot
        },
        {
          path: '/',
          component: Home
        }
      ]
    }
  ]
})
