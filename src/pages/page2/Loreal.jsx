import React from 'react'
import gonarrative from "/photos/gonarrative.jpg";
import abn from "/photos/abna-amro.jpg";
import  rel from "/photos/relcoop.jpg";
import  real from  "/photos/loreal.jpg";

const Loreal = () => {
  return (
    <div className="flex py-28 pt-0 px-4 justify-center rounded-md ">
      <button className="flex border rounded-2xl">
        <img
          className=" p-6   overflow-hidden "
          src={gonarrative}
          alt="fire logo"
        />
        <img
          className="border p-6 overflow-hidden "
          src={abn}
          alt="abn logo"
        />
        <img
          className="border p-6 overflow-hidden "
          src={rel}
          alt="rel logo"
        />
        <img
          className=" p-6 overflow-hidden "
          src={real}
          alt="loreal logo"
        />
      </button>
    </div>
  );
}

export default Loreal