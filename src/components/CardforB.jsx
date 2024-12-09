import React from 'react'

const CardforB = ({ item }) => {
    return (
        <div className=" card flex flex-col lg:w-[335px]  h-[470px]  shadow-2xl">
            <div className="h-[200px] w-full">
                <img className="object-cover" src={item.img} alt="asads" />
            </div>

            <div className="flex flex-col gap-4 relative  h-1/2 px-6">
                <h1 className="text-3xl font-semibold text-[black] ">{item.title}</h1>
                <p className="  text-[black] text-ellipsis overflow-hidden">
                    {item.subheading}
                </p>
                <button className="bg-blue-600 font-semibold text-center text-white p-2 w-fit rounded-sm absolute bottom-0">
                    {item.btntext}
                </button>{""}
                {/* <div className="flex flex-col font-semibold ">

        </div> */}
            </div>
        </div>
    );
};

export default CardforB;