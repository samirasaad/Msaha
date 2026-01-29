import authReducer from "@/features/Auth/store/authSlice";
import { baseApi } from "@/services/api/baseApi";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
