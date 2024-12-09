import React from "react";
import Card2 from "../../componets/Card2.jsx";
import small from "/photos/small.jpg";
import { CardData2 } from "../../Data/CardData2.js";
import Button from "../../componets/Button.jsx";
const Main2 = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-24 p-4 my-8  w-full justify-between  gap-3">
      <div className="lg:w-1/3 w-full rounded-2xl  overflow-hidden bg-red-600 relative">
        <img className="" src={small} alt="girl" />
        <div className="absolute bottom-0 left-0 p-8  text-white backdrop-blur-sm gap-5 flex flex-col">
          <h1 className="text-4xl font-semibold">Teams for Small Business</h1>
          <p>
            Grow your customer base with communications software designed for up
            to 300 employees.
          </p>
          <Button
            text="Learn more"
            url="#"
            className="bg-blue-500 w-fit px-8 py-3 border-none text-white items-center"
          />
        </div>
      </div>
      <div className="flex gap-3 flex-wrap w-full lg:w-3/1 justify-center items-center rounded">
        {CardData2.map((item, idx) => (
          <Card2 item={item} key={idx + "item"} />
        ))}
      </div>
    </div>
  );
};

export default Main2;
