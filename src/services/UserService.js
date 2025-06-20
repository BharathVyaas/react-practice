// src/services/UserService.js
import api from "../api/axios";

const getAllUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export { getAllUsers };
