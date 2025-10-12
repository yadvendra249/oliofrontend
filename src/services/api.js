import axios from "axios";
import { getToken, clearToken } from "../utils/auth";


const api = axios.create({
  baseURL: "/api", 
  timeout: 10000,
  withCredentials: true,
});


api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      clearToken();
      window.location.href = "/login"; 
    }

    return Promise.reject(error);
  }
);


export default api;
