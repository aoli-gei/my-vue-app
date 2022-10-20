import axios from "axios"

export const getMenu = (params) => {
    return axios.request({
        url: '/permission.getMenu',
        method: 'post',
        data: params
    })
}