import axios from "axios"
import { AppApiError } from "../../common/error/AppApiError";

const BASE_URL = 'http://13.54.43.177:3030';


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
})

const handleError = (e) => {
    console.log(e);
    throw new AppApiError(e);
}

const post = async (url, body = {}) => {
    try {
        const res = await instance.post(url, body);
        return res.data;
    } catch (error) {
        handleError(error);
    }
}

const get = async (url, config) => {
    try {
        const res = await instance.get(url,config);
        return res.data;
    } catch (error) {
        handleError(error);
    }
}

const put = async (url, config) => {
    try {
        const res = await instance.put(url,config);
        return res.data;
    } catch (error) {
        handleError(error);
    }
}

const patch = async (url, config) => {
    try {
        const res = await instance.patch(url,config);
        return res.data;
    } catch (error) {
        handleError(error);
    }
}

const deleteCall = async (url, config) => {
    try {
        const res = await instance.delete(url,config);
        return res.data;
    } catch (error) {
        handleError(error);
    }
}


export {
    post,
    get,
    put,
    patch,
    deleteCall
}