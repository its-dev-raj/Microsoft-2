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
      <button className="flex absolute bottom-2 p">{item.btntext}</button>
    </div>
  );
}

export default Staredcard