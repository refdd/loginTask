import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  success: false,
  error: null,
  userData: [],
};

// Async thunk to fetch user data
export const getuserData = createAsyncThunk(
  "api/user",
  async (_, { rejectWithValue }) => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        throw new Error("No token found. Please log in again.");
      }

      // Fetch user data using the token in the Authorization header
      const response = await axios.get(
        "https://api-yeshtery.dev.meetusvr.com/v1/user/info",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user data."
      );
    }
  }
);

// Create slice for handling user data
const userDataSlice = createSlice({
  name: "api/user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getuserData.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getuserData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userData = action.payload; // Store user data in the state
      })
      .addCase(getuserData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload; // Store error message in the state
      });
  },
});

export default userDataSlice.reducer;
