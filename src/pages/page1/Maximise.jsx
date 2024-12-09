import React from "react";
import wpx from "/photos/wpx.jpg";

const Maximise = () => {
  return (
    <div>
      <div className=" md:h-[78vh]  flex felx-col  lg:w-full  justify-around lg:py-18 py-4 lg:px-16 px-4">
        <div className="w-[40%]  md:block  hidden bg-gray-300 "></div>
        <img className="md:w-[60%]" src={wpx} alt="" />
      </div>
      <div className="flex flex-col  lg:px-16 px-4 gap-5 lg:absolute top-[1300px] left-[85px]">
        <p className="lg:w-[300px]  font-semibold text-black text-2xl lg:text-4xl ">
          Maximise the everyday with Microsoft 365
        </p>
        <p className="lg:w-[330px] text-[black] text-md">
          Get online protection, secure cloud storage and innovative apps
          designed to fit your needs – all in one plan.
        </p>
        <div className="flex lg:flex-col gap-5 ">
          <button className="flex   bg-blue-600 font-semibold w-fit p-3 text-white rounded ">
            For one person
          </button>
          <p className="flex font-semibold lg:text-[black] pl-0  text-blue-500]">
            For up to six people{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maximise;
