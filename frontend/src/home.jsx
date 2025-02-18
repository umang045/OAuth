import { useUser } from "@clerk/clerk-react";
import React, { use } from "react";

const home = () => {
  const { user } = useUser();
  return (
    <>
      <div>{user.firstName}</div>
    </>
  );
};

export default home;
