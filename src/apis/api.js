import { request } from './request'
//搜索请求  请求参数{keyword=''}
export const $_getResult = (params) => {
    return request({
        url: '/appinfo/search',
        method: 'get',
        params,
    })
}