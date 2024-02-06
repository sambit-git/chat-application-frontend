import axios from "axios";
import TokenService from "./token";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  // timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    const token = TokenService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Token " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    try {
      if (error?.response?.status === 401) {
        TokenService.removeUser();
      }
      return Promise.reject(error);
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

export default api;
