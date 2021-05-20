import requests from './axios'

/***
 * 搞笑段子
 * @Promise
 */
export function crossTalk(data) {
    return requests.get('/videoRecommend', {
        params: data
    })
}

/***
 * 视频分类
 * @Promise
 */
 export function visualClassification(data) {
    return requests.get('/videoCategoryDetails', {
        params: data
    })
}