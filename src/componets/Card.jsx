import React from 'react'

const Card = ({item}) => {
  return (
    <div className="flex flex-col h-fit lg:w-1/3  shadow relative shadow-gray-400 rounded-2xl p-2 ">
      <div className="">
        <img className="rounded-xl" src={item.img} alt="" />
      </div>
      <div className="flex flex-col gap-5 pt-8 px-4  h-[280px]">
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <p>{item.subheading}</p>
      </div>
      <div className="b-[#5553C1] absolute lg:bottom-2 bottom-4  text-[#5553C1] p-4">
        <button>{item.btntext}</button>
      </div>
    </div>
  );
}

export default Card