import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}

const calculationSlice = createSlice({
    name: "calculation",
    initialState,
    reducer: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }

    },
});

export const { increment, decrement} = calculationSlice.actions;

export default calculationSlice.reducer;
