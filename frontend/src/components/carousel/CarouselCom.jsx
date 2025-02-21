import React from "react";
import { Carousel } from "antd";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselCom = () => {
  useGSAP(() => {
    gsap.from(".carousel", {
      opacity: 0,
      y: 100,
      duration: 2,
    });
  });
  return (
    <>
      <Carousel className="carousel" autoplay>
        <div>
          <div style={contentStyle} className="w-full h-full">
            <img src="" alt="" />
            
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselCom;
