import React, { Children, lazy, Suspense, useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton as ClerkUserButton,
  useAuth,
  useUser,
  UserProfile,
  useSession,
  SignIn,
} from "@clerk/clerk-react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./home";

//import admin component with lazy
const AdminHome = lazy(() => import("./components/admin/adminHome/AdminHome"));

const App = () => {
  const { user } = useUser();
  const { userId, orgRole, getToken } = useAuth();
  const { isLoaded, session, isSignedIn } = useSession();

  const [token, setToken] = useState();
  const [role, setRole] = useState("admin");

  //handle user token by Clerk
  const handleUsersToken = async () => {
    const token = await getToken();
    setToken(token);
  };

  useEffect(() => {
    handleUsersToken();
  }, [handleUsersToken]);

  //declare protected Route
  const ProtectedRoute = ({ children }) => {
    isSignedIn ? <Navigate to="/sign-in" /> : "";
    if (role !== "admin") return <Navigate to="/" />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      children: [
        {
          path: "",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <AdminHome />
              </Suspense>
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "*/*",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
