import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

type InitialStateType = {
  loading: boolean;
  employerAdded: boolean;
};

const initialState: InitialStateType = {
  loading: false,
  employerAdded: false,
};

export const addEmployer = createAsyncThunk<boolean, object>(
  "api/postData",
  async (postData) => {
    const response = await axios.post(
      "http://localhost:8080/user/addUser",
      postData
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addEmployer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addEmployer.fulfilled, (state, action) => {
      state.loading = false;
      state.employerAdded = action.payload;
    });
    builder.addCase(addEmployer.rejected, (state, payload) => {
      state.employerAdded = false;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
export const {} = userSlice.actions;
