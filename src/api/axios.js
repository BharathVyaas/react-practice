import axios from "axios";
import store from "../app/store";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Global error handler
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (process.env.NODE_ENV !== "production") {
      console.error("API Error:", error); // Only log in dev
    }
    // Optionally show toast, return fallback, etc.
    return Promise.reject(error);
  }
);

export default api;
