import React from "react";
import frame from "/photos/frame.jpg";
import Button from "../componets/Button";

const Hero = () => {
    return (
      <div className="w-full h-full lg:relative border-b ">
        <img src={frame} alt="" />

        <div className=" lg:absolute top-44 left-16 lg:gap-8 gap-4 pt-10 px-5 py-20 lg:px-0 flex flex-col  lg:w-[700px]">
          <h1 className="font-semibold lg:text-5xl text-3xl leading-tight">
            Get ready for the future of work with Microsoft Teams
          </h1>
          <p className="pr-4">
            Transform the way you work with next-generation AI capabilities and
            bring together your physical and digital worlds.
          </p>
          <div className="lg:w-1/3 w-full py-2 ">
            <Button
              text={"Download Now"}
              className={" bg-[#5553C1] text-white font-semibold  lg:w-fit w-full"}
            />
          </div>
        </div>
        {/* Content goes here */}
      </div>
    );
};

export default Hero;
