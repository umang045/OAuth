import { UserButton } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useEffect(() => {}, []);

  //gsap for aminamtions
  useGSAP(() => {
    gsap.from(".container", {
      opacity: 0,
      duration: 2,
      x: -50,
      ease: "power2.out",
    });
    gsap.from(".options", {
      duration: 3,
      x: -70,
      ease: "back.out",
    });
  });

  return (
    <>
      <div className=" p-2 bg-gray-800 navbar rounded-sm">
        <div className="container flex items-center justify-between mx-auto ">
          <a href="" className="text-white text-lg font-bold">
            UI
          </a>
          <div className="space-x-10 options md:flex">
            <a href="" className="text-gray-200 hover:text-white">
              Home
            </a>
            <a href="" className="text-gray-300 hover:text-white">
              Products
            </a>
            <a href="" className="text-gray-300 hover:text-white">
              Orders
            </a>
            <a href="" className="text-gray-300 hover:text-white">
              Contact Us
            </a>
          </div>
          <div>
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
