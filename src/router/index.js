import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
// import Home from '../views/Home.vue'
import Login from '@/views/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'// 强制跳转页面
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // {
  //   // 按需加载
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
