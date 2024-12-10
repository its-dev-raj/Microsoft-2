import React from "react";
import Xicon from "/photos/x-icon.jpg";
import instagram from "/photos/Instagram.jpg";
import youtube from "/photos/youtube.jpg";
import blog from "/photos/Blog.jpg";

const Aigenrated = () => {
  return (
    <div className="lg:px-24 px-4 py-24">
      <div className="flex flex-col gap-20">
        <div className=" ">
          <h1>[1]</h1>
          <p>
            AI-generated meeting notes are currently available in Microsoft
            Teams Premium only.
          </p>
        </div>
        <div className="flex lg:flex-row  flex-col gap-5 lg:items-center ">
          <div>
            <p>Follow Microsoft Teams</p>
          </div>
          <div className=" flex gap-4  items-center">
            <img className="  w-10" src={Xicon} alt="" />
            <img src={instagram} alt="" className=" w-9" />
            <img src={youtube} alt="" className=" w-8" />
            <img src={blog} alt="" className=" w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aigenrated;
