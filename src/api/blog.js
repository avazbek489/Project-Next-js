import axios from "axios";

export const blog = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})