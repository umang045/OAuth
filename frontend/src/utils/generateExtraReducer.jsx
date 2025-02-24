import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function generateExtraReducers(thunk, name) {
  return (builder) => {
    builder
      .addCase(thunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state[name] = action.payload;
        switch (name) {
          case "getAllUsers":
            break;
          case "uploadImg":
            toast.success("images uploaded sucessfully");
            break;
          default:
            break;
        }
      })
      .addCase(thunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        toast.error(`Error: ${action.error?.message}`);
      });
  };
}

