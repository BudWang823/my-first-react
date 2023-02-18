import request from '../utils/request'
export function getNowPlaying() {
    return request({
        url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3186439',
        method: 'get',
        headers: {
            'X-Host':'mall.film-ticket.film.list',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}
export function getFilmInfo(data = {}) {
    return request({
        url: 'https://m.maizuo.com/gateway',
        method: 'get',
        params:{
            k: '4676070',
            ...data
        },
        headers: {
            'X-Host':'mall.film-ticket.film.info',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}