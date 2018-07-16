import Vue from 'vue'
import Router from 'vue-router'

import MasterLayout from '../layouts/MasterLayout'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Forgot from '../pages/Forgot'
import Home from '../pages/Home'
import TopicDetail from '../pages/topic/Detail'
import TopicEdit from '../pages/topic/Edit'
import UserDetail from '../pages/user/Detail'
import UserEdit from '../pages/user/Edit'
import UserChangePassword from '../pages/user/ChangePassword'
import Wiki from '../pages/Wiki'
import Explore from '../pages/Explore'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '',
    component: MasterLayout,
    children: [{
      path: '/login',
      component: Login
    }, {
      path: '/register',
      component: Register
    }, {
      path: '/forgot',
      component: Forgot
    }, {
      path: '/',
      component: Home
    }, {
      path: '/topic/:id',
      component: TopicDetail
    }, {
      path: '/create-topic',
      component: TopicEdit
    }, {
      path: '/edit-topic/:id',
      component: TopicEdit
    }, {
      path: '/user/:id',
      component: UserDetail
    }, {
      path: '/user-edit/:id',
      component: UserEdit
    }, {
      path: '/user-change-password/:id',
      component: UserChangePassword
    }, {
      path: '/wiki',
      component: Wiki
    }, {
      path: '/explore',
      component: Explore
    }, {
      path: '/about',
      component: About
    }]
  }, {
    path: '*',
    component: NotFound
  }]
})
