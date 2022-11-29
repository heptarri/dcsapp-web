//api请求二次封装
import axios from 'axios'
import { SEARCH_IP } from './https'

//搜索请求地址
export const request = axios.create({
    baseURL: SEARCH_IP,
    timeout: 10000//设置请求超时
})