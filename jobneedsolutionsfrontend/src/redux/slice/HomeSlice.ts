import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

type InitialStateType = {
  numOfCakes: number;
  data: User[] | string | null;
  loading: boolean;
  error: string;
};

const initialState: InitialStateType = {
  numOfCakes: 10,
  data: [],
  loading: false,
  error: "",
};

// export const fetchData = createAsyncThunk("" | null, string)(
//   "user/fetchUsers",
//   () => {
//     return axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         res.data;
//       });
//   }
// );

export const fetchData = createAsyncThunk<User[] | "" | null, string>(
  "api/fetchData",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

export const postData = createAsyncThunk<string, object>(
  "api/postData",
  async (postData) => {
    const response = await axios.post(
      "http://localhost:8080/employer/addEmployer",
      postData
    );
    return response.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
    remove: (state) => {
      state.numOfCakes--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload || null;
      state.error = "";
    });

    //post data
    builder.addCase(postData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export default homeSlice.reducer;
export const { add, remove } = homeSlice.actions;
