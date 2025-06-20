// src/services/AuthService.js
import api from "../api/axios";

const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export { login };
