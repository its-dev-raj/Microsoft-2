import React, { useState } from "react";
import micro from "/photos/micro.jpg";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Button from "../componets/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const surname = "tandan";
  console.log(`raj   ${surname}   raj is a software Engineer`);
  return (
    <div className="lg:w-full shadow-md   shadow-blue-100 flex relative justify-center py-4 px-2 ">
      <div className="w-full justify-center lg:w-[150px] order-2 flex lg:border-r-2 items-center  border-black ">
        <img src={micro} alt="microsoft" className=" h-6" />
      </div>
      <div className="order-1 absolute left-2 lg:hidden">
        {open ? (
          <IoClose className="size-6" onClick={() => setOpen(false)} />
        ) : (
          <HiOutlineMenuAlt4 className="size-6" onClick={() => setOpen(true)} />
        )}
      </div>
      <div
        className={`w-full lg:static fixed ${
          open ? "block" : " hidden"
        } lg:top-0 top-10 z-20 bg-white left-0 lg:w-5/6 lg:flex justify-between order-3 px-2 items-center`}
      >
        <div className="flex gap-5 pl-4 lg:items-center text-sm flex-col lg:flex-row ">
          <h1 className="text-[black] font-semibold text-xl lg:pl-4">Teams</h1>

          {[
            "products",
            "feacture",
            "pricing",
            "industries",
            "resources",
            "support",
          ]?.map((item, idx) => {
            return (
              <h1 className="hover:underline capitalize " key={item + idx}>
                {item}
              </h1>
            );
          })}
        </div>

        <div className="flex pt-2 lg:p-0 flex-col lg:flex-row gap-3">
          {["downloaded Teams", "sign in"]?.map((item, idx) => {
            return (
              <Button
                key={idx + "po"}
                className={" text-[black] "}
                text={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
