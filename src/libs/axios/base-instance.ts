import axios from "axios";

const baseURL = import.meta.env.BACKEND_API_URL;

const baseInstance = axios.create({
  baseURL,
});

baseInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

baseInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default baseInstance;
