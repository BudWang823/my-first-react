import axios from "axios";
const request = axios.create({
    // API 请求的默认前缀
    baseURL: '',
    timeout: 6000 // 请求超时时间
  })
request.interceptors.request.use(config => {
    return config
})
request.interceptors.response.use(res => {
    return res.data
})


export default request