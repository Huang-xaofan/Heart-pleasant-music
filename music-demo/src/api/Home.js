//封装要发起的请求
import request from '@/utils/request'//把网络请求引入过来

//封装网络请求方法
//推荐歌单
export const recommebdMusic = params => request({
  url: "/personalized",//请求端口里面的地址
  params//默认为get请求
})

//最新音乐
export const hotMusic = params => request({
  url: "/personalized/newsong",
  params
})