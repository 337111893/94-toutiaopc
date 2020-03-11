/****
 * 封装请求工具 request.js
 * 对于 axios的二次封装
 * 配置拦截器 以及其他
 * ****/
import axios from 'axios'
import router from '@/router' // 路由实例对象
import JSONBig from 'json-bigint' // 引入地方处理大数字的包

// 拦截器及其他操作
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置公共的请求头地址
// 在响应拦截器之前先转换
axios.defaults.transformResponse = [function (data) {
  // data 是响应回来的字符串
  // 需要判断是否为空

  // const result = JSONBig.parse(data)
  // return result
  return data ? JSONBig.parse(data) : {}
}]
// 请求拦截器的开发
axios.interceptors.request.use(function (config) {
  // 成功时执行  第一个 参数 会有一个config  config 就是所有的axios的请求信息
  // 在第一个函数中 需要将配置进行返回  返回的配置 会作为 请求参数进行请求
//     在返回之前 就是我们统一注入token的最佳时间
  const token = localStorage.getItem('user-token') // 从兜里拿钥匙 也就是从缓存中取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config
}, function (error) {
  // 失败时执行第二个  axios 是一个支持promise  如果失败了 我们应该直接reject  reject会直接进入到axios的catch中
  return Promise.reject(error)
})

// 响应拦截器的开发
axios.interceptors.response.use(function (response) {
  // 回调函数第一个参数 是响应体
  // 在拦截器中 需要将数据返回  将数据进行解构
  return response.data ? response.data : {} // 有的接口 没有任何的响应数据
  // 成功的时候执行
}, function (error) {
  // 失败的时候执行
  // error是错误对象 里面包含了错误的状态码 和响应信息

  if (error.response.status === 401) {
    localStorage.removeItem('user-token') // 删除钥匙
    router.push('/login') // 直接导入路由实例对象 使用跳转方式 和组件中this.$router是一样的
    // 跳回登录页
    // this.$router 错误的!!! this 不是组件实例
  }
  // 进行错误的处理
  return Promise.reject(error) // 所有的axios调用 依然可以在catch中得到错误
})
export default axios
