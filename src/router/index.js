import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
// import Home from '../views/Home.vue'
import Login from '@/views/login'
import SecondHome from '@/views/home/second_home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'// 强制跳转页面
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      { //
        path: '', // 二级路由的path 什么都不写 代表二级路由的默认组件 如果 a => /home/a 如果什么都不写  /home
        component: SecondHome // 默认的二级路由组件
      }, {
        //   path:'/home/comment', // 完整地址 评论列表的地址
        path: 'comment', // 简写地址
        component: () => import('@/views/comment') // 按需加载的方式
      }
    ]
    // 在一级路由的路由表下 children 配置二级路由表
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
