import axios from 'axios';

export const createUser = ({user}) => {
    axios.post('http://localhost:7000/auth/user', user).then((data) => {
        console.log(data)
    })
};

export const getUserData = ({id}) => {
    axios.get(`http://localhost:7000/auth/user/${id}`).then((data) => {
        console.log(data)
    })
};

export const updateUserData = ({newUserData}) => {
    axios.put(`http://localhost:7000/auth/user/${newUserData._id}`, newUserData).then((data) => {
        console.log(data)
    })
};

export const deleteUser = ({id}) => {
    axios.delete(`http://localhost:7000/auth/user/${id}`).then((data) => {
        console.log(data)
    })
};