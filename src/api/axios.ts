import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5173";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    timeout: 10000, // retry after 10 seconds otherwise it retry after some times
})

export default axiosInstance;