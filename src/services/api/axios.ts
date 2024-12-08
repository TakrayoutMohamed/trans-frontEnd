import axios, {CanceledError} from 'axios';

const BASE_URL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

export const axiosPrivate =  axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type' : 'application/json', },
});
export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type' : 'application/json',
    },
});


export {CanceledError};