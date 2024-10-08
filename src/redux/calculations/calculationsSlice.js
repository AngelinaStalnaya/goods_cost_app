import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as calcAPI from '../../requests/calculationRequests';

const initialState = {
    calculations: []
}

export const getUserCalculationsAsync = createAsyncThunk(
    "calculations/getUserCalculationsAsync",
    async (userName) => {
      const response = await calcAPI.getAllUserCalculations(userName);
      return response.data;
    }
);

const calculationSlice = createSlice({
    name: "calculation",
    initialState,
    reducers: {
        clearState: (state) => {
            state.calculations = [];
        }
   },
   extraReducers: (builder) => {
    builder.addCase(getUserCalculationsAsync.fulfilled, (state, action) => {
        state.calculations = action.payload;
    });
   },
});

export const { clearState } = calculationSlice.actions;

export default calculationSlice.reducer;
