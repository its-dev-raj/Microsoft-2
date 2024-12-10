import React from "react";
import micro from "/public/photos/micro.jpg";
import search from "/public/photos/search.jpg";
import ecart from "/public/photos/ecart.jpg";
import signup from "/public/photos/signup.jpg";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex  h-16 shadow-md px-14 items-center shadow-slate-300 ">
      <div className="flex order-3 lg:order-1  ">
        <img className=" flex p h-6  " src={micro} alt="microsoft" />
      </div>
      <div className="order-1 lg:order-2 flex lg:w-4/6 items-center justify-between p-4 ">
        <div className="flex lg:hidden">
          <IoMdMenu />
        </div>
        <div className="overflow-hidden  text-sm  h-20 gap-4  hidden  w-[600px] lg:flex justify-center items-center  ">
          {[
            { title: "Microsoft 365", path: "/" },
            { title: "Teams", path: "/microsoft-teams/group-chat-software" },
            { title: "Copilot", path: "/" },
            { title: "Windows", path: "/" },
            { title: "Surface", path: "/" },
            { title: "Xbox", path: "/" },
            { title: "Support", path: "/" },
          ].map((item, idx) => {
            return (
              <Link to={item.path}>
                <p className="hover:underline cursor-pointer px-2 py-1">
                  {item.title}
                </p>{" "}
              </Link>
            );
          })}
        </div>
        <p className="hover:underline lg:flex hidden text-sm  ">All Microsoft</p>
      </div>

      <div className="flex hover:underline order-2 items-center lg:order-3 lg:pl-14  gap-2  ">
        <p className="hidden lg:flex text-sm">search</p>
        <img className="size-6 " src={search} alt="" />
      </div>
      <div className="flex hover:underline order-4 lg:pl-14 gap-2  ">
        <p className="hidden lg:flex text-sm">Cart</p>
        <img className="size-6" src={ecart} alt="" />
      </div>
      <div className="flex gap-2 hover:underline order-5 lg:pl-10 ">
        <p className="hidden lg:flex text-sm">Sign in</p>
        <img className="size-6" src={signup} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
