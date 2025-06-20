import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { users: [], loading: false },
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
  userSlice.actions;
export default userSlice.reducer;
