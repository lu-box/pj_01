<template>
  <div id="app">
    <FooterNav/>
    <router-view/>
  </div>
</template>

<script>
//导入需要的组件
//入口    名字     从       路径
import FooterNav from '@/components/FooterNav'
export default {
  //组件
  components:{
    FooterNav,
  },
};
</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
}
html,body{
    height: 100%;
    touch-action: none;
    ul,
    li{
        list-style: none;
    }
}
</style>