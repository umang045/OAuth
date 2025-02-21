import axios from "axios";
import { base_url } from "../../utils/AxiosConfig";

const getAllUsers = async () => {
  const response = await axios.get(
    `http://localhost:4545/api/users/getAllUsers`
  );
  if (response.data) return response.data;
};

export const UserService = {
  getAllUsers,
};
