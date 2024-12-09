import React from "react";
import Xicon from "/photos/x-icon.jpg";
import instagram from "/photos/Instagram.jpg";
import youtube from "/photos/youtube.jpg";
import blog from "/photos/Blog.jpg";

const Aigenrated = () => {
  return (
    <div className="px-24 py-24">
      <div className="flex flex-col gap-20">
        <div className=" ">
          <h1>[1]</h1>
          <p>
            AI-generated meeting notes are currently available in Microsoft
            Teams Premium only.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 items-center ">
          <div>
            <p>Follow Microsoft Teams</p>
          </div>
          <div className=" flex gap-3  items-center">
            <img className="scale-110  w-12" src={Xicon} alt="" />
            <img src={instagram} alt="" className=" w-10" />
            <img src={youtube} alt="" className=" w-10" />
            <img src={blog} alt="" className=" w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aigenrated;
