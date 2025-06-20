import api from "../api/axios";
import store from "../app/store";

export const setupAxiosInterceptors = () => {
  api.interceptors.request.use(
    (config) => {
      const token = store.getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // For credentials like httpOnly cookies
      config.withCredentials = true;

      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        // Optionally logout or redirect
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );
};
