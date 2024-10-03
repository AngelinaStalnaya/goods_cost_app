import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from '../../requests/userRequests';

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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isAuthorized = true;
      state.name = action.payload;
      state = action.payload;
    },
    loggedOut: (state) => {
      state.isAuthorized = false;
      state.name = '';
    },
  },
  extraReducers: (builder) => {
    builder
    // .addCase(loggedInAsync.pending, () => {
    //     console.log('loggedInAsync.pending');
    // })    
    .addCase(loggedInAsync.fulfilled, (state, action) => {
        state.isAuthorized = true;
        state.name = action.payload.name;
        })
  },
});



export const { loggedIn, loggedOut } = userSlice.actions;

export default userSlice.reducer;
