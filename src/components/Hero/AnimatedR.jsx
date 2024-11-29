import React from "react";
import { motion } from "framer-motion";

const AnimatedR = () => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 8, // Slower duration
        ease: [0.33, 0.01, 0.67, 1], // Custom easing for smoothness
        type: "spring",
        stiffness: 30, // Lower stiffness for a smoother feel
        damping: 10, // Increase damping for smoother stopping
      },
    },
  };

  return (
    <div className="flex">
      <svg
        width="50"        
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 20 118 L 20 20 Q 61 20 65 54 Q 60 87 20 79 M 21 82 L 65 110"
          fill="transparent"
          stroke="white"
          strokeWidth="5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
      <svg
        width="50"        
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 20 118 L 20 20 Q 61 20 65 54 Q 60 87 20 79 M 21 82 L 65 110"
          fill="transparent"
          stroke="white"
          strokeWidth="5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
};

export default AnimatedR;
