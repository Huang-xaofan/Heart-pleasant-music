<template>
  <div>
    <van-cell
      center
      :title="name"
      :label="author + '   ' + name"
     
    >
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon name="play-circle-o" class="search-icon" @touchstart="playFn" /><!--字体图标-->
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props:{
    name:String,//歌名
    author:String,//作者
    id:Number//歌曲id
  },
  methods: {
    playFn(){
      this.$router.push({
        path:'/play',
        query:{
          id:this.id
        }
      })
    }
  },
};
</script>

<style>
.search-icon {
  font-size: 24px;
  line-height: inherit;
}
</style>