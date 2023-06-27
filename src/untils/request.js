import axios from "axios";

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async (path, opntions = {}) => {
    const respone = await request.get(path, opntions)
    return respone.data
}

export default request