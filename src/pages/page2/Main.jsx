import React, { useEffect, useRef } from "react";
import { CardData } from "../../Data/CardData";
import Card from "../../componets/Card";
import AnimateParent from "../../components/AnimateParent";
import Animate from "../../components/Animate";
import { useInView } from "motion/react"
const Main = () => {
  return (
    <div>
       <AnimateParent  className="flex lg:flex-row flex-col  gap-4 w-full justify-between px-4 lg:px-24">
        {CardData.map((item, idx) => (
          <Animate as="div" className="flex w-full lg:flex-row flex-col gap-4 justify-between px-4" key={idx}>
            <Card item={item} />
          </Animate>
        ))}
      </AnimateParent>
    </div>
  );
};

export default Main;
