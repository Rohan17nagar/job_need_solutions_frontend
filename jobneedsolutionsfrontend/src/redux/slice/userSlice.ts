import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

type InitialStateType = {
  loading: boolean;
  employerAdded: boolean;
  token: string;
};

const initialState: InitialStateType = {
  loading: false,
  employerAdded: false,
  token: "",
};

export const addEmployer = createAsyncThunk<boolean, object>(
  "api/postData",
  async (postData) => {
    const response = await axios.post(
      "http://localhost:8080/auth/create-user",
      postData
    );

    return response.data;
  }
);

export const login = createAsyncThunk<string, object>(
  "api/login",
  async (login) => {
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      login
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    console.log(builder, "builder");
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

    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      console.log("testing data");

      sessionStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.token = "error";
      sessionStorage.removeItem("user");
    });
  },
});

export default userSlice.reducer;
export const {} = userSlice.actions;
