import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
/*
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Create from '@/pages/Create/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import My from '@/pages/My/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
*/

Vue.use(Router)
window.store = store
/*
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: Detail,
      meta: { requiresAuth: true }
    },
    {
      path: '/edit/:blogId',
      name: 'Edit',
      component: Edit,
      meta: { requiresAuth: true }
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
      meta: { requiresAuth: true }
    }
  ]
})
*/
const router = new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Index/template.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/template.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/pages/Create/template.vue')
  },
  {
    path: '/detail/:blogId',
    name: 'Detail',
    component: () => import('@/pages/Detail/template.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/edit/:blogId',
    name: 'Edit',
    component: () => import('@/pages/Edit/template.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/pages/My/template.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/Register/template.vue')
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('@/pages/User/template.vue'),
    meta: { requiresAuth: true }
  }]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(store.getters.isLogin)
    store.dispatch('checkLogin').then(isLogin => {
      if (!store.getters.isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
    
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router