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

const post = async (url, body) => {
    try {
        const res = await instance.post(url, body);
        return res.data;
    } catch (error) {
        handleError(error);
    }
}

export {
    post
}