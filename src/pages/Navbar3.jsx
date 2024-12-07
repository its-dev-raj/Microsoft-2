import React, { useState } from "react";
import Button from "../componets/Button";

const Navbar3 = () => {
  const [open, setOpen] = useState(true);
  const [down, setdown] = useState(false);
  return (
    <div
      className={`flex flex-row text-center  z-10 lg:px-16 px-4 items-center w-full lg:p-4 p-2  justify-between shadow-sm shadow-slate-300  bg-[white] lg:shadow-md  text-[black]    ${
        open ? "sticky top-0" : "hidden"
      }`}
    >
      <div
        className={` gap-6 lg:static ${
          down ? "absolute" : "hidden"
        }   z-20  top-20  lg:bg-none lg:inline-block lg:w-auto w-full left-0 flex flex-col lg:flex-row  `}
      >
        <div className="flex lg:flex-row  flex-col gap-10 text-[#3D3C7C] font-semibold text-sm bg-white">
          {[
            "Featured news",
            "Solutions",
            "Products and services",
            "Customer stories",
            "Get started",
          ]?.map((item, idx) => {
            return (
              <h1 className="hover:underline capitalize" key={idx + "s"}>
                {item}
              </h1>
            );
          })}
        </div>
      </div>
      <div onClick={() => setdown(!down)} className="lg:hidden ">
        feactured news
      </div>

      <Button
        className={" text-[white] rounded-md font-semibold   bg-[#5553C1] "}
        text={"see plans and pricing"}
      />
    </div>
  );
};

export default Navbar3;
