import React, { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton as ClerkUserButton,
  useAuth,
  useUser,
  UserProfile,
} from "@clerk/clerk-react";

const App = () => {
  const { user } = useUser();
  const { userId, orgRole, getToken } = useAuth();
  const [token, setToken] = useState();

  //handle user token by Clerk
  const handleUsersToken = async () => {
    const token = await getToken();
    setToken(token);
  };

  useEffect(() => {
    handleUsersToken();
  }, [handleUsersToken]);

  return (
    <>
      <SignedIn>
        <SignOutButton></SignOutButton>
        <div>welcome {user?.firstName}</div>
        <div>clerk_id : {userId}</div>
        <div>Role : {orgRole}</div>
        <div>your Token : {token}</div>
        <ClerkUserButton></ClerkUserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton></SignInButton>
      </SignedOut>
    </>
  );
};

export default App;
