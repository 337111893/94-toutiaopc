import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/permission' // 引入权限模块
import ElementUI from 'element-ui'// 引入UI
import axios from '@/utils/request' // 引入封装的request.js
import Components from '@/components' // 引入axios
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import '@/styles/index.less'
Vue.config.productionTip = false
Vue.use(Components) // 全局注册自己开发的组件，就是components下的index.js
Vue.use(ElementUI)// 全局注册element-ui框架，一旦注册都可以使用
// 配置axios的baseURL
Vue.prototype.$axios = axios // 将axios赋值给 Vue对象的原型属性
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
