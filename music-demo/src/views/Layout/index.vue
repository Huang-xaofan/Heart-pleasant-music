<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed />

    <div>
      <!--路由视图-->
      <keep-alive>
        <router-view class="main"></router-view>
      </keep-alive>
    </div>

    <van-tabbar route>
      <van-tabbar-item icon="home-o" name="首页" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" name="搜索" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title /*拿路由对象里面的title  */,
    };
  },
  watch: {
    //监听
    $route() {
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
/deep/ .van-nav-bar__content {
  background-color: #DD001B !important;

}
/deep/ .van-nav-bar__title{
  color: aliceblue;
}
</style>