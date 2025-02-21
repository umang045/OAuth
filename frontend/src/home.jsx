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
import React, { use, useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CarouselCom from "./components/carousel/CarouselCom";
import { getAllUser } from "./Service/User/UserSlice";
import axios from "axios";
import Loading from "./components/loading/Loading";

const Home = () => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);

  const { getAllUsers , isLoading } = useSelector((state) => state?.Users, shallowEqual);

  useEffect(() => {
    dispatch(getAllUser());
  }, [getAllUser]);

  // console.log(getAllUsers, isLoading);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <div>
            {/* <Navbar /> */}
          </div>
          <div className="mt-2">
            <CarouselCom />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
