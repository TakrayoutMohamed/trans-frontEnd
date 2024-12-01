import axios, {CanceledError} from 'axios';

const BASE_URL = "http://10.12.9.5:8000/api/";

export const axiosPrivate =  axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type' : 'application/json', },
    // withCredentials : true,
});
export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type' : 'application/json',
    },
    // withCredentials : true,
});


export {CanceledError};