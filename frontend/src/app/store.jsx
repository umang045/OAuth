import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Service/User/UserSlice";
import uploadReducer from "../Service/upload/uploadSlice";

export const store = configureStore({
  reducer: {
    Users: userReducer,
    Upload: uploadReducer,
  },
});
