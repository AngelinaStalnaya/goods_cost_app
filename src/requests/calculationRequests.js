import axios from "axios";

export const createCalculation = async (calculation) => {
  const response = await axios.post(
    "http://localhost:7000/api/calculations",
    calculation
  );
  return response;
};

export const getAllUserCalculations = async (userName) => {
  const response = await axios.get(
    `http://localhost:7000/api/calculations/user/${userName}`
  );
  return response;
};

export const getCalculationData = async (id) => {
  const response = await axios.get(
    `http://localhost:7000/api/calculations/${id}`
  );
  return response;
};

export const updateCalculationData = async (newCalculationData) => {
  const response = await axios.put(
    `http://localhost:7000/api/calculations/${newCalculationData._id}`,
    newCalculationData
  );
  return response;
};

export const deleteCalculation = async (id) => {
  const response = await axios.delete(
    `http://localhost:7000/api/calculations/${id}`
  );
  return response;
};

