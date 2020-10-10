// 出口 违约
export default{
 //  路径   电影
    path:'/film',
//    成分           入口
    component: () => import('@/views/Film/Film'),
    redirect:"/film/nowplaying",
    //子
    children:[
        {
            path:"nowplaying",
            component:() =>import('@/views/Film/Nowplaying')
        },
        {
            path:"comingsoon",
            component:() =>import('@/views/Film/ComingSoon')
        },
    ]
}