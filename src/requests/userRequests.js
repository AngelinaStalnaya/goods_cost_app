import axios from 'axios';

export const createUser = (user) => {
    axios.post('http://localhost:7000/auth/user', user).then((data) => {
        console.log(data)
    })
};

export const getUserData = async (id) => {
    const response = await axios.get(`http://localhost:7000/auth/user/${id}`);
    return response;
};

export const updateUserData = (newUserData) => {
    axios.put(`http://localhost:7000/auth/user/${newUserData._id}`, newUserData).then((data) => {
        console.log(data)
    })
};

export const deleteUser = (id) => {
    axios.delete(`http://localhost:7000/auth/user/${id}`).then((data) => {
        console.log(data)
    })
};

export const findUser = (userData) => {
    axios.post('http://localhost:7000/auth/user/find', userData).then((data) => {
        console.log(data)
    })
};