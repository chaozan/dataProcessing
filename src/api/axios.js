//  引入axios
import axios from 'axios';

//  创建axios实例
const requests = axios.create({
    //  基础接口路径
    baseURL: 'https://api.apiopen.top',
    //  设置请求超时事件
    timeout: 120000
})

//  错误处理函数
const err = (error) => {
    console.log("出错")
    if(error.response) {
        const data = err.response.data

        if(error.response.status === 403) {
            console.log(error.response, '403')
        }
        if(err.response.status === 401) {
            console.log(err.response, '401')
        }
    }
    console.log("出错返回实例")
    return Promise.reject(error)
}

//  设置请求拦截器
requests.interceptors.request.use(
    config => {
        // const token = localStorage.getItem('usertoken')
        // if(token) {
        //     config.headers['token'] = token
        // }
        console.log("拦截")
        return config
    }, err
)

//  设置接收拦截器
requests.interceptors.response.use(
    response => {
        const res = response.data

        if(res.code !== 0 && res.code !== 200) {
            console.log(res)

            if(res.code === 401 || res.code === 403 || res.code === 999) {
                console.log("请登录")
            }
            return Promise.reject('error')
        } else {
            console.log("接收成功")
            return res
        }
    }, err
)

//  抛出 axios实例
// export default {
//     requests
// }
export default requests