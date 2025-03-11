import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5, // Adds stagger effect
      duration: 1.5,
    },
  },
};

const Animatexdirection = ({ children, className }) => {
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

export default Animatexdirection;
