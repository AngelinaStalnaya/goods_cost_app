import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from "../../requests/userRequests";

export const loggedInAsync = createAsyncThunk(
  "user/loggedInAsync",
  async (userId) => {
    const response = await userAPI.getUserData(userId);
    return response.data;
  }
);

const initialState = {
  isAuthorized: false,
  name: "",
  id: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedOut: (state) => {
      state.isAuthorized = false;
      state.name = "";
      state.id = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loggedInAsync.fulfilled, (state, action) => {
      state.isAuthorized = true;
      state.name = action.payload.name;
      state.id = action.payload._id;
    });
  },
});

export const { loggedOut } = userSlice.actions;

export default userSlice.reducer;
