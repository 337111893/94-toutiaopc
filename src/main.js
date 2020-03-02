import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 引入UI
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
Vue.config.productionTip = false
Vue.use(ElementUI)// 全局注册element-ui框架，一旦注册都可以使用
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
