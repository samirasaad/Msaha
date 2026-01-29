import { axiosInstance } from "./axios";

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // global error handling
    if (error.response?.status === 401) {
      // logout / refresh token logic here
    }
    return Promise.reject(error);
  },
);
