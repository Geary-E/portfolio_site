import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://blog-section2-301885cf5d53.herokuapp.com',
    withCredentials: true,
    headers : {
        'Content-Type': 'application/json'
    },
});

export default axiosInstance;