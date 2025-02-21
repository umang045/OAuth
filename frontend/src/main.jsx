import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store.jsx";

const PUBLISHABLE_KEY =
  "pk_test_ZWxlZ2FudC1tb29zZS04MC5jbGVyay5hY2NvdW50cy5kZXYk";
if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env.local file");
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
    <ToastContainer />
  </Provider>
);
