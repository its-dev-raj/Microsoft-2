import React from "react";
import Card from "../../components/Card";
import { cardData } from "../../data2/CardData";

const Main = () => {
  return (
    <div>
      <div className="card-container flex justify-around flex-wrap py-24 lg:px-16 px-4 lg:gap-4 gap-12">
        {cardData.map((item, idx) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
