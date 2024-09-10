import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  success: false,
  error: null,
  //   dataUser: JSON.parse(localStorage.getItem("dataUser")) || null,
};

export const LoginExcute = createAsyncThunk(
  "api/auth",
  async ({ dataForm }, { rejectWithValue }) => {
    console.log(dataForm.email, dataForm.password);
    try {
      const response = await axios.post(
        "https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token",
        {
          email: dataForm.email,
          password: dataForm.password,
          isEmployee: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  }
);

const authSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    logout: (state) => {
      state.dataUser = null;
      localStorage.removeItem("dataUser");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginExcute.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(LoginExcute.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.dataUser = action.payload;

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("dataUser", JSON.stringify(action.payload));
      })
      .addCase(LoginExcute.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
