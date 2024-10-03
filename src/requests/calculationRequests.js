import axios from 'axios';

export const createCalculation = (calculation) => {
    axios.post('http://localhost:7000/api/calculations', calculation).then((data) => {
        console.log(data)
    }).catch((error)=> console.log(error))
};

export const getAllUserCalculations = ({userId}) => {
    axios.get(`http://localhost:7000/api/calculations/user/${userId}`).then((data) => {
        console.log(data)
    }).catch((error)=> console.log(error))
};

export const getCalculationData = ({id}) => {
    axios.get(`http://localhost:7000/api/calculations/${id}`).then((data) => {
        console.log(data)
    }).catch((error)=> console.log(error))
};

export const updateCalculationData = ({newCalculationData}) => {
    axios.put(`http://localhost:7000/api/calculations/${newCalculationData._id}`, newCalculationData).then((data) => {
        console.log(data)
    }).catch((error)=> console.log(error))
};

export const deleteCalculation = ({id}) => {
    axios.delete(`http://localhost:7000/api/calculations/${id}`).then((data) => {
        console.log(data)
    }).catch((error)=> console.log(error))
};