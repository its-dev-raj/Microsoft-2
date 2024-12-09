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
          <div className=" flex gap-3 w-[30px] items-center">
            <img className="w-[40px] " src={Xicon} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={blog} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aigenrated;
