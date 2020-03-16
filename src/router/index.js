import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName:'Login' */'../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName:'Reg' */'../views/Reg.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import(/* webpackChunkName:'Forget' */'../views/Forget.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
