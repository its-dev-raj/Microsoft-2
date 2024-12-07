import React from 'react'
import Button from "../componets/Button.jsx"
import back from "/photos/back.jpg"
import forest from "/photos/forrest.jpg"

const Servicepage = () => {
  return (
    <div className="relative ">
      <img className="h-screen " src={back} alt="" />
      <div className="flex p-6 lg:flex-row flex-col bg-white rounded-3xl overflow-hidden items-center justify-center absolute  lg:top-28 top-6 lg:left-20 lg:right-20  ">
        <div className="w-full order-2 lg:order-1 lg:w-1/2 ">
          <div className=" lg:gap-8 gap-4 pt-10 px-5 py-20 lg:px-0 flex flex-col  lg:w-[600px]">
            <h1 className="font-semibold lg:text-3xl text-3xl leading-tight">
              The Total Economic ImpactTM of Microsoft Teams
            </h1>
            <p className="pr-4">
              Read a commissioned study conducted by Forrester Consulting to
              learn about potential cost savings and business benefits of Teams.
            </p>
            <div className="lg:w-1/3 w-full py-2  ">
              <Button
                text={"Read the study"}
                className={
                  " bg-[#5553C1] text-white font-semibold  lg:w-fit w-full"
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 flex  rounded-3xl lg:order-2">
          <img src={forest} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Servicepage