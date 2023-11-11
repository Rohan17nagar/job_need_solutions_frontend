import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "./slice/HomeSlice";
import jobsSlice from "./slice/jobsSlice";
export const rootReducer = combineReducers({
  HomeSlice,
  jobsReducer: jobsSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
