import axios from "axios";

export function getAxiosInstance(endpoint = "http://localhost:8000") {
    return axios.create({
        withCredentials: true,
        baseURL: endpoint
    });
}