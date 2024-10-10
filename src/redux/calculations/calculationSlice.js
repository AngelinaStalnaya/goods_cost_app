import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as calcAPI from "../../requests/calculationRequests";

const initialState = {
  hours: "",
  payment: "",
  materials: "",
  delivery: "",
  packaging: "",
  tax_rate: "",
  additional_costs: "",
  equipment: "",
  name: "",
  date: "",
  id: "",
};

export const getCalculationDataAsync = createAsyncThunk(
  "calculation/getCalculationDataAsync",
  async (id) => {
    const response = await calcAPI.getCalculationData(id);
    return response.data;
  }
);

export const updateCalculationDataAsync = createAsyncThunk(
  "calculation/updateCalculationDataAsync",
  async (newCalculation) => {
    const response = await calcAPI.updateCalculationData(newCalculation);
    return response.data;
  }
);

export const deleteCalculationAsync = createAsyncThunk(
  "calculation/deleteCalculationAsync",
  async (id) => {
    const response = await calcAPI.deleteCalculation(id);
    return response.data;
  }
);

const calculationSlice = createSlice({
  name: "calculation",
  initialState,
  reducers: {
    clearCalculationState: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCalculationDataAsync.fulfilled, (state, action) => {
        state.hours = action.payload.hours;
        state.payment = action.payload.payment;
        state.materials = action.payload.materials;
        state.delivery = action.payload.delivery;
        state.packaging = action.payload.packaging;
        state.tax_rate = action.payload.tax_rate;
        state.additional_costs = action.payload.additional_costs;
        state.equipment = action.payload.equipment;
        state.name = action.payload.name;
        state.date = action.payload.date;
        state.id = action.payload._id;
      })
      .addCase(updateCalculationDataAsync.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(deleteCalculationAsync.fulfilled, (state) => {
        state = initialState;
      });
  },
});

export const { clearCalculationState } = calculationSlice.actions;

export default calculationSlice.reducer;
