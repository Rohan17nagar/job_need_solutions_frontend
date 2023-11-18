import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { ContentType } from "../../Types/types";

type InitialStateType = {
  loading: boolean;
  adminAllUsers: GetAllUsersResponse;
};

interface GetAllUsersResponse {
  content: Array<ContentType>;
  pageable: object;
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
  last: boolean;
}

const initialState: InitialStateType = {
  loading: false,
  adminAllUsers: {
    content: [],
    pageable: {},
    totalElements: 0,
    totalPages: 0,
    numberOfElements: 0,
    last: false,
  },
};

export const getAllUsersListAdmin = createAsyncThunk<
  GetAllUsersResponse,
  number
>("api/getAllUsersListAdmin", async (pageNumber) => {
  const response = await axios.get(
    `http://localhost:8080/admin/getUsersList/${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(sessionStorage.getItem("user") ?? "").jwtToken
        }`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersListAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsersListAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.adminAllUsers = action.payload;
    });
    builder.addCase(getAllUsersListAdmin.rejected, (state) => {
      state.loading = false;
      state.adminAllUsers = initialState.adminAllUsers;
    });
  },
});

export default adminSlice.reducer;
// export const {} = jobsSlice.actions;
