import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignOutButton,
  useAuth,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/clerk-react";
import React, { use } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  return (
    <>
      <div>Home Work</div>
      <SignedIn>
        <SignOutButton />
        <UserProfile/>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Home;
