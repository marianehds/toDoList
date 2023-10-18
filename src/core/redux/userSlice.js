import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      localStorage.setItem("user", JSON.stringify(payload));
      return { ...state, isLogged: true, name: payload };
    },
    logout(state) {
      localStorage.removeItem("user");
      return { ...state, isLogged: false, name: "" };
    },
  },
});

export const { changeUser, logout } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
