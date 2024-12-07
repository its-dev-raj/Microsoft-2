import React from "react";
import { CardData } from "../Data/CardData";
import Card from "../componets/Card";

const Main = () => {
  return (
    <div>
      <div className="flex  lg:flex-row flex-col gap-4 justify-between px-4 lg:px-16">
        {CardData.map((item, idx) => (
          <Card item={item} key={idx + "Da"} />
        ))}
      </div>
    </div>
  );
};

export default Main;
