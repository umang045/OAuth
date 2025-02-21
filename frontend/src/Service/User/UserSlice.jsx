import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "./UserService";
import generateExtraReducers from "../../utils/generateExtraReducer";

export const getAllUser = createAsyncThunk(
  "users/getAllUsers",
  async (ThunkAPI) => {
    try {
      return await UserService.getAllUsers();
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    generateExtraReducers(getAllUser, "getAllUsers")(builder);
  },
});

export default UserSlice.reducer;
