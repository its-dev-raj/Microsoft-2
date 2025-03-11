import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { filter } from "framer-motion/m";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.5, // Adds stagger effect
      duration: 0.5,
    },
  },
};

const AnimateParent = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Adjust the `amount` to control when it triggers

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={fadeInUpAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateParent;
