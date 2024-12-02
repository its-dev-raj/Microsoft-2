import React from 'react'
import micro from "/photos/micro.jpg";
const Navbar = () => {
  return (
    <div className="w-full shadow-lg   shadow-blue-200 flex justify-center py-4 px-20">
      <div className="w-2/3 lg:w-1/6 flex border-r-2 border-black ">
        <img src={micro} alt="microsoft" className="w-32" />
      </div>
      <div className="w-1/3 lg:w-5/6 flex justify-between px-2 ">
        <div className="flex gap-2">
          <h1>Term</h1>

          {[
            "products",
            "feacture",
            "pricing",
            "industries",
            "resources",
            "support",
          ]?.map((item, idx) => {
            return <h1 className="hover:underline capitalize">{item}</h1>;
          })}
        </div>

        <div className='flex gap-3'>
          {["downloaded Teams", "sign in"]?.map((item) => {
            return <button className='p-2 border border-black rounded-lg capitalize'>{item}</button>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar