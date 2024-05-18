import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://booking-api-li8f.onrender.com/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

export default apiRequest;
