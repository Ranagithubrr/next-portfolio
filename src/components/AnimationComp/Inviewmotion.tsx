import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface InViewMotionProps {
  children: ReactNode;
}
const InViewMotion = ({ children} : InViewMotionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }} 
      animate={isInView ? {opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default InViewMotion;
