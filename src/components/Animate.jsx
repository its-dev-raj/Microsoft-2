import React from "react";
import { motion } from "framer-motion";

const childAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {

      duration: 0.8,
    },
  },
};

const Animate = ({ children, className, as = "h1" }) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag variants={childAnimation}  
  className={className}>
      {children}
    </MotionTag>
  );
};

export default Animate;
