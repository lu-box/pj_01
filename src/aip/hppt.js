//封装axios，添加请求拦截器

import axios from 'axios'

//设置基础域名（请求地址）
    //默认值   基本的url
axios.defaults.baseURL = "https://m.maizuo.com/";

// 请求拦截器的处理，添加两个请求头
axios.interceptors.request.use(function(config){
    let host = ""
    let info = axios.headers.info;
//判断 info ==  谁
    if(info == "film"){
        //就获取谁的地址
        host = "mall.film-ticket.film.list";
    }
    if(info == "cinema"){
        host = "mall.film-ticket.cinema.list"
    }
    if(info == "info"){
        host = "mall.film-ticket.film.info"
    }
    //......
    config.headers = {
        "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16023209473017605367463937","bc":"310100"}',
            "X-Host":host
    };

    return config;
},function(err){
//错误处理
});

// 到处封装好的模块命名为axios
export default axios