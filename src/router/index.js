import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
// import Home from '../views/Home.vue'
import Login from '@/views/login'
import SecondHome from '@/views/home/second_home'
Vue.use(VueRouter)

const routes = [
  {
    path: '*', // 匹配任何找不到组件的路由
    component: () => import('@/views/404')
  },
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
      }, {
        //  path: '/home/material' // 二级路由地址
        path: 'material',
        component: () => import('@/views/material') // 简写
      }, {
        path: 'articles',
        component: () => import('@/views/articles') // 引入组件
      },
      {
        path: 'publish/:articleId?', // 发布文章 加上问号表示 可有可无
        component: () => import('@/views/publish')// 引入组件
      }, {
        path: 'account', // 账户地址
        component: () => import('@/views/account') // 账户组件
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
