import axios from "axios";

const baseURL = import.meta.env.VITE_API_HOST

const instance = axios.create({
    baseURL
})

export default instance
