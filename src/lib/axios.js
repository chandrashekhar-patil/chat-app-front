import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-back-end-w40e.onrender.com",
  withCredentials: true,
});
