import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

type JobPostItem = {
  jobTitle: string;
  experienceRange: string;
  companyName: string;
  salaryRange: string;
  location: string;
  jobDescription: string;
};

type ApplyForJobArgs = {
  arg1: number;
  arg2: number;
};

type InitialStateType = {
  loading: boolean;
  jobPosts: Array<JobPostItem>;
  isApplied: boolean;
};

const initialState: InitialStateType = {
  loading: false,
  jobPosts: [],
  isApplied: false,
};

export const getAllJobPosts = createAsyncThunk<Array<JobPostItem>>(
  "api/postData",
  async () => {
    const response = await axios.get(
      "http://localhost:8080/jobPost/getAllJobPosts"
    );
    return response.data;
  }
);

export const applyForJob = createAsyncThunk<number, ApplyForJobArgs>(
  "api/applyForJob",
  async (args) => {
    const response = await axios.get(
      `http://localhost:8080/jobApplications/applyForJob/${args.arg1}/${args.arg2}`
    );
    return response.data;
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllJobPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllJobPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.jobPosts = action.payload;
    });
    builder.addCase(getAllJobPosts.rejected, (state) => {
      state.jobPosts = [];
      state.loading = false;
    });

    builder.addCase(applyForJob.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(applyForJob.fulfilled, (state, action) => {
      state.isApplied = true;
      state.loading = false;
    });
    builder.addCase(applyForJob.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default jobsSlice.reducer;
export const {} = jobsSlice.actions;
