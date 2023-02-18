 import request from '../utils/request'
export const getJson = (data = {}) => {
    return request({
        url: './test.json',
        baseURL: '',
        method: 'get',
        data,
        handers: {

        }
    })
}