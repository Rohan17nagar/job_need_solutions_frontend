import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "./slice/HomeSlice";
import jobsSlice from "./slice/jobsSlice";
import userSlice from "./slice/userSlice";
import adminSlice from "./slice/adminSlice";

export const rootReducer = combineReducers({
  HomeSlice,
  jobsReducer: jobsSlice,
  userSlice: userSlice,
  adminSlice: adminSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
