import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 引入element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

// axios体验
// import axios from 'axios'
// // 配置域名
// axios.defaults.baseURL = "https://m.maizuo.com/";
// axios.interceptors.request.use(function(config){
//   config.headers = {
//       "X-Client-Info":
//           '{"a":"3000","ch":"1002","v":"5.0.4","e":"16006566672048699400193","bc":"110100"}',
//       "X-Host": "mall.film-ticket.film.list",
//   };
//   // 返回配置
//   return config
// },function(err) {
//   // 对错误的处理
// })
// axios.get(
//     "gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8632456"
// );

// 使用懒加载
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
    loading: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603102964199&di=69878634f385e7f7523893f964068b5e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F67277dbe4fad041d641e207608eb36dd2933fdee8bbd-xqH6vu_fw658",
});

// 定义事件总线（后续需要使用的）
Vue.prototype.eventBus = new Vue();

// 导入vuex的store对象
import store from "@/store/vuex";

// 同步一下localStorage数据到Vuex
let _token = localStorage.getItem("_token");
if (_token) {
    store.commit("updateToken", _token);
}

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
