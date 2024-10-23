"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaHome, FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface IconItem {
  icon: IconType;
  label: string;
}

const Sidebar = () => {

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  const icons: IconItem[] = [
    { icon: FaHome, label: "Home" },
    { icon: FaUser, label: "About" },
    { icon: FaPhoneAlt, label: "Contact" },
    { icon: FaEnvelope, label: "Email" },
  ];

  return (
    <>
      <div className="hidden sm:flex fixed z-20 top-1/2 left-0 -translate-y-1/2 w-20 flex-col items-center space-y-10 py-10">
        {icons.map((item, index) => (
          <motion.div
            key={item.label}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileHover={{ scale: 1.2 }}
          >
            <item.icon className="text-teal-400 text-4xl cursor-pointer" />
          </motion.div>
        ))}
      </div>

      <div className="sm:hidden fixed z-20 bottom-0 left-0 w-full flex justify-around bg-gray-900 py-5">
        {icons.map((item) => (
          <motion.div key={item.label} whileHover={{ scale: 1.2 }}>
            <item.icon className="text-teal-400 text-3xl cursor-pointer" />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
