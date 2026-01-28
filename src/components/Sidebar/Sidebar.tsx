"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaEnvelope, FaGraduationCap } from "react-icons/fa";

interface IconItem {
  icon: IconType;
  label: string;
  sectionId: string;
}

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  // console.log('current section is:', activeSection)

  // Improved handleScroll: current section remains active until next section crosses 1/3 viewport
  const handleScroll = () => {
    const sections = ["home", "skills", "education", "experience", "projects", "contact"];
    let currentSection = sections[0]; // default

    for (let i = 0; i < sections.length; i++) {
      const sectionId = sections[i];
      const el = document.getElementById(sectionId);
      if (!el) continue;
      const rect = el.getBoundingClientRect();

      // If the top of this section is above 1/3rd of viewport, consider it active
      if (rect.top <= window.innerHeight / 3) {
        currentSection = sectionId;
      } else {
        // since sections are in order, once a section top is below threshold we can break
        break;
      }
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    // Run once to set initial active section
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.07,
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    }),
  };

  const icons: IconItem[] = [
    { icon: FaUser, label: "Home", sectionId: "home" },
    { icon: FaTools, label: "Skills", sectionId: "skills" },
    { icon: FaGraduationCap, label: "Education", sectionId: "education" },
    { icon: FaBriefcase, label: "Experience", sectionId: "experience" },
    { icon: FaProjectDiagram, label: "Projects", sectionId: "projects" },
    { icon: FaEnvelope, label: "Contact", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop / large screens: vertical pill */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="hidden sm:flex fixed z-30 top-1/2 left-4 -translate-y-1/2 w-16 rounded-full p-4 flex-col items-center space-y-6 glass-panel"
      >
        {icons.map((item, index) => {
          const isActive = activeSection === item.sectionId;
          const Icon = item.icon;
          return (
            <motion.button
              key={item.sectionId}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              whileHover={{ scale: 1.08 }}
              onClick={() => scrollToSection(item.sectionId)}
              // group for group-hover tooltip
              className={`relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out outline-none border-none focus:ring-2 focus:ring-emerald-300/60 ${
                isActive
                  ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 text-slate-900 shadow-lg"
                  : "bg-slate-900/70 text-slate-200 hover:bg-slate-800/70 hover:text-white"
              }`}
              aria-label={item.label}
            >
              <Icon className={`text-xl pointer-events-none ${isActive ? "text-slate-900" : ""}`} />

              {/* Tooltip: hidden on small screens (sm:block), uses Tailwind group-hover to animate */}
              <span
                className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 rounded-lg bg-slate-900 text-white text-sm pointer-events-none whitespace-nowrap shadow-lg
                  opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-2
                  transition-all duration-200 ease-out hidden sm:inline-flex`}
                // small accessibility improvement
                role="tooltip"
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Mobile bottom navbar */}
      <div className="sm:hidden fixed z-30 bottom-4 left-1/2 -translate-x-1/2 w-11/12 py-3 rounded-full flex justify-around shadow-xl px-3 glass-panel">
        {icons.map((item) => {
          const isActive = activeSection === item.sectionId;
          const Icon = item.icon;
          return (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className={`p-3 rounded-full transition-all duration-300 ease-in-out outline-none border-none focus:ring-2 focus:ring-emerald-300/60
                 ${isActive ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 text-slate-900 shadow-lg" : "bg-slate-900/70 text-slate-200 hover:bg-slate-800/70 hover:text-white"}`}
              aria-label={item.label}
            >
              <Icon className={`text-2xl lg:text-3xl pointer-events-none ${isActive ? "text-slate-900" : ""}`} />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
