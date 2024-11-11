import axios from "axios";

const baseUrl = 'https://handmade-goods-cost-backend.vercel.app'

export const createCalculation = async (calculation) => {
  const response = await axios.post(
   `${baseUrl}/api/calculations`,
    calculation
  );
  return response;
};

export const getAllUserCalculations = async (userName) => {
  const response = await axios.get(
    `${baseUrl}/api/calculations/user/${userName}`
  );
  return response;
};

export const getCalculationData = async (id) => {
  const response = await axios.get(
    `${baseUrl}/api/calculations/${id}`
  );
  return response;
};

export const updateCalculationData = async (newCalculationData) => {
  const response = await axios.put(
    `${baseUrl}/api/calculations/${newCalculationData._id}`,
    newCalculationData
  );
  return response;
};

export const deleteCalculation = async (id) => {
  const response = await axios.delete(
    `${baseUrl}/api/calculations/${id}`
  );
  return response;
};