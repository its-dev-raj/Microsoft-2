import React from "react";
import Button from "../componets/Button.jsx";

const Card2 = ({ item }) => {
  return (
    <div className="">
      <div className="flex flex-col lg:gap-6 gap-4 border rounded-3xl lg:w-80  lg:h-80   p-6 lg:p-10 h-50 shadow-lg ">
        <img className="size-6 " src={item.image} alt="" />
        <p className="text-2xl font-semibold ">{item.title}</p>
        <p>{item.subheading?.slice(0, 80)}</p>
        <a href={item.url} target="_blank">
          <div className="flex gap-5 items-center ">
            <button
              className={
                "bg-blue-500 p-3 py-1  text-white rounded-md underline-none "
              }
            >
              {">"}
            </button>{" "}
            <li className="flex gap-2 text-[#333275] border-b-1 text-sm  underline font-semibold pl-0">
              Learn more
            </li>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card2;
