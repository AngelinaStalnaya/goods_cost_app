import axios from 'axios';

export const createUser = async (user) => {
    const response = await axios.post('http://localhost:7000/auth/user', user);
    return response;
};

export const getUserData = async (id) => {
    const response = await axios.get(`http://localhost:7000/auth/user/${id}`);
    return response;
};

export const updateUserData = async (newUserData) => {
    const response = await axios.put(`http://localhost:7000/auth/user/${newUserData._id}`, newUserData);
    return response;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`http://localhost:7000/auth/user/${id}`);
    return response;
};

export const findUser = async (userData) => {
    const response = await axios.post('http://localhost:7000/auth/user/find', userData)
    return response.data;
};