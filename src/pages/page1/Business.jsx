import React from "react";
import CardforB from "../../components/CardforB";
import { cardDataforB } from "../../data2/cardDataforB.js";

const Business = () => {
  return (
    <div>
      <div className="card-container flex justify-around flex-wrap py-6 lg:px-16 px-4 lg:gap-4 ">
        {cardDataforB.map((item, idx) => (
          <CardforB item={item} />
        ))}
      </div>
    </div>
  );
};

export default Business;
