import React from 'react'
import getback from "/photos/getback.jpg"
const Staredcard = ({item}) => {
  return (
    <div className="flex flex-col relative gap-5 h-[300px] w-full px-4 py-12 pt-6  bg-[#FFFFFF] rounded-2xl shadow-2xl border">
      <div className="size-12  ">
        <img className="border" src={item.image} alt="growth" />
      </div>
      <p className="text-xl font-semibold ">{item.title}</p>
      <p>{item.subheading}</p>
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
  );
}

export default Staredcard