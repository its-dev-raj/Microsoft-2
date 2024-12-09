import React from "react";
import { GetcardData } from "../../Data/GetcardData";
import Staredcard from "../../componets/Staredcard";
import getback from "/photos/getback.jpg";

const Getcard = () => {
  return (
    <div className="relative">
      <div className="">
        <img
          className="lg:w-full h-[1100px] lg:h-[400px] "
          src={getback}
          alt=""
        />
      </div>
      <div className="flex absolute lg:top-2 bottom-4 lg:flex-row flex-col gap-4 py-6 justify-between px-4 lg:px-24">
        {GetcardData.map((item, idx) => (
          <Staredcard item={item} key={idx + "va"} />
        ))}
      </div>
    </div>
  );
};

export default Getcard;
