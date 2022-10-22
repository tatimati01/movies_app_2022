import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjAyMDE3NmYyMTAzZDI3NGYwMjFjODEyMmNlZjIyYSIsInN1YiI6IjYyMDExODE2Y2Y0YjhiMDBlMGI3ZjBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XNvgsjjNXKaNU6yX2blOLmDXcmR-PzVvNpNi54T34CA'

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config
})

export {axiosService}