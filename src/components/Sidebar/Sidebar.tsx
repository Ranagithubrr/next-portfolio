"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaUser, FaTools, FaBriefcase,FaProjectDiagram, FaEnvelope } from "react-icons/fa";

interface IconItem {
  icon: IconType;
  label: string;
  sectionId: string;
}

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  console.log('current section is:',activeSection)
  const handleScroll = () => {
    const sections = ["home", "skills", "experience", "projects",  "contact"];

    let currentSection = "";  
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();

        // Check if the section is in view
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
    });

    // Set the section that is in view
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    }),
  };

  const icons: IconItem[] = [
    { icon: FaUser, label: "Home", sectionId: "home" },
    { icon: FaTools, label: "Skills", sectionId: "skills" },
    { icon: FaBriefcase, label: "Experience", sectionId: "experience" },
    { icon: FaProjectDiagram, label: "Projects", sectionId: "projects" },
    { icon: FaEnvelope, label: "Email", sectionId: "contact" },
  ];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* Pill-shaped Sidebar for larger screens */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="hidden sm:flex fixed z-20 top-1/2 left-2 -translate-y-1/2 w-16 bg-gradient-to-b from-gray-900 to-gray-800 rounded-full shadow-2xl p-4 flex-col items-center space-y-10"
      >
        {icons.map((item, index) => (
          <motion.div
            key={item.label}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.6)",
            }}
            className={`p-2 bg-gray-900 text-teal-300 hover:text-white  rounded-full transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-teal-500 to-cyan-500 ${activeSection === item.sectionId ? "bg-teal-500 text-white" : ""
              }`}
              onClick={() => scrollToSection(item.sectionId)}
          >
            <item.icon
              className={` text-xl cursor-pointer transition-colors duration-300${activeSection === item.sectionId ? "text-white" : ""
                }`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile bottom navbar */}
      <div className="sm:hidden fixed z-20 bottom-4 left-1/2 -translate-x-1/2 w-11/12 bg-gradient-to-r from-gray-900 to-gray-800 py-3 rounded-full flex justify-around shadow-xl">
        {icons.map((item, index) => (
          <motion.div
            key={item.label}
            custom={index}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 10px rgba(0, 255, 255, 0.6)",
            }}
            className={`p-3 bg-gray-900 rounded-full transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-teal-500 to-cyan-500 ${activeSection === item.sectionId ? "bg-teal-500" : ""
              }`}
              onClick={() => scrollToSection(item.sectionId)}
          >
            <item.icon
              className={`text-teal-300 text-2xl lg:text-3xl cursor-pointer transition-colors duration-300 ${activeSection === item.sectionId ? "text-white" : ""
                }`}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
