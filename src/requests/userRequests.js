import axios from "axios";

const baseUrl = 'https://handmade-goods-cost-backend.vercel.app'


export const createUser = async (user) => {
  const response = await axios.post(`${baseUrl}/auth/user`, user);
  return response;
};

export const getUserData = async (id) => {
  const response = await axios.get(`${baseUrl}/auth/user/${id}`);
  return response;
};

export const updateUserData = async (newUserData) => {
  const response = await axios.put(
    `${baseUrl}/auth/user/${newUserData._id}`,
    newUserData
  );
  return response;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${baseUrl}/auth/user/${id}`);
  return response;
};

export const findUser = async (userData) => {
  const response = await axios.post(
    `${baseUrl}/auth/user/find`,
    userData
  );
  return response.data;
};
