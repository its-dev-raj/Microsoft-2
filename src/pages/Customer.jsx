import React from "react";
import gonarrative from "/photos/gonarrative.jpg";
import teams from "/photos/teams.jpg";
import Button from "../componets/Button";
import meeting from "/photos/customer-meeting.jpg";
const Customer = () => {
  return (
    <div className="px-24 py-16 ">
      <div className="flex flex-col gap-5">
        <p className="text-sm font-medium text-[#6C63D4]">CUSTOMER STORIES </p>
        <p className="text-4xl font-semibold ">
          See how customers are innovating with Teams
        </p>
      </div>
      <div className="flex  shadow-xl rounded-2xl">
        <div className="w-1/2 gap-5 flex flex-col py-10 justify-between px-6">
          <div className="w-fit border-black">
            <img className=" " src={gonarrative} alt="logo" />
          </div>
          <p className="text-2xl font-semibold">
            "Without a doubt, the fluid collaboration that Teams enables has a
            positive impact on our ability to be responsive and focus on the
            work to be done."
          </p>
          <p>Matthew Woodget, CEO of Go Narrative</p>
          <div className="flex flex-col gap-5">
            <p>Products</p>
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
        <div className="flex py-10">
          <img src={meeting} alt="online-meeting" />
        </div>
      </div>
    </div>
  );
};

export default Customer;
