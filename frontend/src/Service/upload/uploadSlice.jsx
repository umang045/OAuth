import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import generateExtraReducers from "../../utils/generateExtraReducer";
import { UploadService } from "./uploadService";

export const uploadImg = createAsyncThunk(
  "upload/Images",
  async (ThunkAPI, data) => {
    try {
      console.log(data);
      return await UploadService.uploadImages(data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  img: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const UploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    generateExtraReducers(uploadImg, "uploadImg")(builder);
  },
});

export default UploadSlice.reducer;
