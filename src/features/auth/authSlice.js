import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, error: null, isAuthenticated: false },
  reducers: {
    loginRequest: (_, action) => {},
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
