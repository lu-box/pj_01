import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由模块化文件
//入口   中心  路由器           路径
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'

//常量  路线
const routes = [
  {
  //路径
    path: '/',
  //重定向
    redirect:'/film'
  },
  //使用引入的路由
  centerRouter,
  cinemaRouter,
  filmRouter
]
//常量  路由
const router = new VueRouter({
  mode: 'history',

  //前缀
  // base: process.env.BASE_URL,
  routes
})

export default router
