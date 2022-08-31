//统一的出口
import { recommebdMusic, hotMusic } from '@/api/Home'
import { hotSearch, searchResult } from '@/api/Search'
import { getSongById, getLyricById } from '@/api/Play'
export const recommebdMusicApi = recommebdMusic//把网络请求方法拿过来 导出
export const hotMusicAPI = hotMusic// 把获取最新音乐的网络请求导出
export const hotSearchAPI = hotSearch//热搜
export const searchResultAPI = searchResult//搜索结果
export const getSongByIdAPI = getSongById//获取歌曲详情
export const getLyricByIdAPI = getLyricById//获取歌词

