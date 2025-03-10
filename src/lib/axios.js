import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://chat-app-back-end-w40e.onrender.com/api",
  withCredentials: true,
});
