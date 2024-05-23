import axios from "axios";
import Cookies from "js-cookie";

const apiRequest = axios.create({
  baseURL: "https://booking-api-li8f.onrender.com/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

apiRequest.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiRequest;
