import React, { useState } from "react";
import classroom from "/photos/classroom.jpg";
import Aq from "../componets/Aq.jsx";
const Classroom = () => {
  const arr1 = [
    {
      title: "Sample Title 1",
      description: "This is a description for the first object.",
      url: "https://www.example1.com",
      image: "https://www.example1.com/image1.jpg",
    },
    {
      title: "Sample Title 2",
      description: "This is a description for the second object.",
      url: "https://www.example2.com",
      image: "https://www.example2.com/image2.jpg",
    },
    {
      title: "Sample Title 3",
      description: "This is a description for the third object.",
      url: "https://www.example3.com",
      image: "https://www.example3.com/image3.jpg",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col justify-between  lg:px-16">
      <div className="order-2 hidden lg:block">
        <img className="" src={classroom} alt="" />
      </div>
      <div className="lg:flex lg:flex-col">
        {arr1.map((item, idx) => (
          <Aq item={item} key={idx + "i"} />
        ))}
      </div>
    </div>
  );
};

export default Classroom;
