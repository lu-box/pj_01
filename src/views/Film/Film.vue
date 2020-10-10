<template>
    <div>
        <FilmListTopNav/>
        <router-view></router-view>
    </div>
</template>

<script>
//入口  名字           从     路径
import FilmListTopNav from'@/components/FilmListTopNav'
export default {
    // 注册组件
    components:{
        FilmListTopNav
    }
}
</script>