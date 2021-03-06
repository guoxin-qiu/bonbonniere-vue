import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // hash, history
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requireAuth: false }
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['../views/Home.vue'], resolve),
      meta: { requireAuth: true }
    },
    {
      path: '/403',
      name: '403',
      component: resolve => require(['../views/403.vue'], resolve),
      meta: { requireAuth: false }
    },
    {
      path: '/User',
      name: 'User',
      component: resolve => require(['../views/User/User.vue'], resolve),
      meta: { requireAuth: true }
    },
    {
      path: '/User2',
      name: 'User2',
      component: resolve => require(['../views/User/User2.vue'], resolve),
      meta: { requireAuth: true }
    }
  ]
})
