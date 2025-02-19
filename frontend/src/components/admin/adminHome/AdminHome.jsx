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

const AdminHome = () => {
  const { user } = useUser();
  const { userId, orgRole, getToken } = useAuth();
  // const { isLoaded, session, isSignedIn } = useSession();
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <div>hello ji</div>
    </>
  );
};

export default AdminHome;
