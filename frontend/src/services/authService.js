import api from "../api/axios";

export const loginUser = async (data) => {

  const response = await api.post("/login", data);

  return response.data;
};

export const getMe = async () => {

  const response = await api.get("/me");

  return response.data;
};

export const logoutUser = async () => {

  const response = await api.post("/logout");

  return response.data;
};