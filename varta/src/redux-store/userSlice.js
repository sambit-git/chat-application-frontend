import { createSlice } from "@reduxjs/toolkit";
import TokenService from "../services/token";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: TokenService.getUser(),
  },
  reducers: {
    updateUser: (state, action) => {
      state.username = action.payload;
    },
    deleteUser: (state, action) => {
      state.username = undefined;
    },
  },
});
const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;

export default userActions;
