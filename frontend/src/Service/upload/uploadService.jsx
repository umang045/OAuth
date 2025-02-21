import axios from "axios";
import { base_url } from "../../utils/AxiosConfig";

const uploadImages = async (data) => {
  console.log(data);
  const response = await axios.post(
    `http://localhost:4545/api/upload/uploadImg`,
    data
  );
  if (response.data) {
    console.log(response.data);
    return response.data;
  }
};

export const UploadService = {
  uploadImages,
};
