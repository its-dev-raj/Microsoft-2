import React from "react";
import gonarrative from "/photos/gonarrative.jpg";
import teams from "/photos/teams.jpg";
import Button from "../../componets/Button";
import meeting from "/photos/customer-meeting.jpg";
const Customer = () => {
  return (
    <div className="lg:px-24 px-10  py-8 ">
      <div className="flex  flex-col py-10 gap-5">
        <p className="text-sm font-medium text-[#6C63D4]">CUSTOMER STORIES </p>
        <p className="lg:text-4xl text-2xl font-medium lg:font-semibold ">
          See how customers are innovating with Teams
        </p>
      </div>
      <div className="flex lg:flex-row  flex-col lg:h-fit shadow-md bg-gray-200 -gray-400 rounded-3xl overflow-hidden ">
        <div className="lg:w-1/2 lg:h-1/1 h-[500px] w-full  lg:order-1 order-2 flex flex-col py-6  justify-between px-4 lg:px-6">
          <div className="w-fit border border-white rounded-lg">
            <img className=" " src={gonarrative} alt="logo" />
          </div>
          <p className="lg:text-2xl text-md font-medium lg:font-semibold">
            "Without a doubt, the fluid collaboration that Teams enables has a
            positive impact on our ability to be responsive and focus on the
            work to be done."
          </p>
          <p>Matthew Woodget, CEO of Go Narrative</p>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Products</p>
            <div className="flex gap-4 items-center">
              <img className="size-8" src={teams} alt="teams logo" />
              <p>Teams</p>
            </div>
          </div>
          <div className="">
            <Button
              text={"Read the story"}
              className={
                "bg-[#5553C1] text-white font-semibold w-fit flex px-4 py-3 rounded-xl"
              }
            />
          </div>
        </div>
        <div className="lg:flex lg:order-2 order-1 lg:h-[500px] w-full py-2 lg:w-1/2 px-2">
          <img
            className="rounded-2xl  overflow-hidden "
            src={meeting}
            alt="online-meeting"
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
