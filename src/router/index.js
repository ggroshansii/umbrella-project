/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Splash from '../components/Splash'
import Categories from '../components/Categories.vue'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Splash',
      component: Splash,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    }
  ]
})