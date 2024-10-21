import axios, {CanceledError} from 'axios';

const BASE_URL = "https://alvares.free.beeceptor.com/";

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate =  axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type' : 'application/json'},
    // withCredentials : true,
})

export {CanceledError};