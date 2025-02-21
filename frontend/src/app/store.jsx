import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Service/User/UserSlice";

export const store = configureStore({
  reducer: {
    Users: userReducer,
  },
});
