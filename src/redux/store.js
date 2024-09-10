"use client";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import userDataSlice from "./auth/userDataSlice";

export const store = configureStore({
  reducer: {
    authLogin: authSlice,
    userData: userDataSlice,
  },
});
