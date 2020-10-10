import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// // axios体验
// import axios from 'axios'

// // 域名配置
// //    默认值    基础
// axios.defaults.baseURL = "https://m.maizuo.com/";
// axios.interceptors.request.use(function(config){
// //配置     标题
//   config.headers = {
//     "X-Client-Info":
//             '{"a":"3000","ch":"1002","v":"5.0.4","e":"16023209473017605367463937","bc":"310100"}',
//             "X-Host":"mall.film-ticket.film.list"
//   }

//   // 返回 配置
//   return config
// },function(err){

//   // 错误处理
// })

// axios.get(
//   "gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3130782"
//   )

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
