import React from "react";
// import xbox from "/public/photos/xbox.jpg";
const Card = ({ item }) => {
  return (
    <div className=" card flex flex-col lg:w-[330px]  lg:h-[450px] h-[390px] shadow-2xl">
      <div className="h-[200px] w-full">
        <img className="object-cover" src={item.img} alt="asads" />
      </div>
    
        <div className="flex flex-col gap-4  relative lg:py-0 py-4 lg:h-1/2 h-1/2 px-6">
          <h1 className="lg:text-3xl text-xl  font-semibold text-[black] ">{item.title}</h1>
          <p className="  text-[black] text-ellipsis overflow-hidden">
            {item.subheading}
          </p>
          <button className="bg-blue-600 font-semibold text-center text-white pt-2  p-2 w-fit rounded-sm absolute lg:bottom-2 bottom-4">
            {item.btntext}
          </button>{" "}
         
   
        {/* <div className="flex flex-col font-semibold ">
         
        </div> */}
      </div>
    </div>
  );
};

export default Card;
