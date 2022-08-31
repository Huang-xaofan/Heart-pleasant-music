<template>
  <div>
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      shape="round"
    />
    <!--热门搜索-->
    <div class="search_wrap" v-if="resultList.length === 0">
      <p class="hot_title">热门搜索</p>
      <!--关键字-->
      <ul class="hot_name_wrap">
        <li
          class="hot_item"
          v-for="(obj, index) in hotList"
          :key="index"
          @click="btn(obj.searchWord)"
        >
          {{ obj.searchWord }}
        </li>
      </ul>
    </div>

    <!--搜索结果-->
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <SongItem
        v-for="obj in resultList"
        :key="obj.id"
        :name="obj.name"
        :author="obj.ar[0].name"
        :id="obj.id"
      >
      </SongItem>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem";

export default {
  data() {
    return {
      searchValue: "",
      hotList: [], //热搜关键字
      resultList: [], //搜索结果
      timer: null, //保存定时器
    };
  },
  async created() {
    const res = await hotSearchAPI();
    this.hotList = res.data.data;
  },
  methods: {
    async btn(str) {
      this.searchValue = str; //点击关键字赋予给输入框显示
      const res = await searchResultAPI({
        type: 1,
        keywords: this.searchValue,
      });
      this.resultList = res.data.result.songs;
      setTimeout(() => {
        clearTimeout(this.timer); //清除定时器
      });
    },
  },
  watch: {
    //监听
    searchValue(val) {
      clearTimeout(this.timer); //清除定时器
      if (val.length === 0) return (this.resultList = []); //判断输入框的值

      this.timer = setTimeout(async () => {
        //搜索框里面的值改变(点击/输入),立即执行
        const res = await searchResultAPI({
          type: 1,
          keywords: val,
        });
        this.resultList = res.data.result.songs;
      }, 1000);
    },
  },
  components: {
    SongItem,
  },
};
</script>

<style scoped>
/*覆盖vant组件样式,除了用less文件以外,还可以直接找到内蒙,直接覆盖 */
/*deep控制scoped 加入的随意属性,放到选择器面前,确保能够选中组件内的标签类名 */
/deep/ .van-field__control {
  font-size: 14px !important;
}

/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
