import React, { useState } from "react";

const Navbar2 = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`flex lg:flex-row text-center text-sm font-normal flex-col z-10 px-10 w-full p-2 gap-4 justify-center bg-[#5553C1] text-[white]    ${
        open ? "lg:absolute" : "hidden"
      }`}
    >
      <p>
        Gain the competitive edge you need with powerful AI and Cloud solutions
        by attending Microsoft Ignite online.
      </p>
      <p className="underline">Register now</p>

      <button
        className="absolute   right-4  lg:right-36"
        onClick={() => setOpen(false)}
      >
        X
      </button>
    </div>
  );
};

export default Navbar2;
