import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"//自动适应宽度,改变HTML的字体
import "@/styles/reset.css"//初始化标签默认的样式
import router from "@/router"//导入路由对象

//全局注册vant组件(按需引入)
import { NavBar, Tabbar, TabbarItem, Row, Col, Image as VanImage, Cell, CellGroup, Icon, Search } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Row).use(Col).use(VanImage).use(Cell).use(CellGroup).use(Icon).use(Search);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
