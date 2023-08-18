import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api'; // 나중에 환경변수로 바꾸기

const defaultApi = axios.create({ // 인증X
    baseURL: BASE_URL,
    headers: { "Content-Type": 'application/json' }
})

const token = localStorage.getItem('accessToken'); 
const authApi = axios.create({ // 인증O
    baseURL: BASE_URL,
    headers: { 
        "Content-Type": 'application/json',
        ACCESS_TOKEN: token 
    },
    timeout: 5000
})

const authImageApi = axios.create({ // 인증O
    baseURL: BASE_URL,
    headers: { 
        "Content-Type": 'multipart/form-data',
        ACCESS_TOKEN: token 
    },
    timeout: 5000
})

export const defaultInstance = defaultApi;
export const authInstance = authApi; 
export const authImageInstance = authImageApi; 