'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiReactjsFill, 
  RiTailwindCssFill, 
  RiNodejsFill 
} from 'react-icons/ri';
import { 
  SiJavascript, 
  SiPython, 
  SiMongodb, 
  SiTypescript, 
  SiGit 
} from 'react-icons/si';

// Parent animation: applies stagger effect to children
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

// Child animation: floating effect for each card
const floatingVariants = {
  animate: {
    y: [-15, 15, -15], // Smooth floating motion
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

const SkillsSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 p-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Skills</h2>
        <p className="text-gray-300 mb-10">
          These are the technologies I work with.
        </p>

        {/* Parent Motion div to apply stagger effect */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="animate"
        >
          {[
            { Icon: RiReactjsFill, name: "React", color: "text-teal-400" },
            { Icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-teal-400" },
            { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
            { Icon: SiPython, name: "Python", color: "text-blue-400" },
            { Icon: RiNodejsFill, name: "Node.js", color: "text-green-500" },
            { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
            { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
            { Icon: SiGit, name: "Git", color: "text-red-400" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              variants={floatingVariants}
            >
              <skill.Icon className={`${skill.color} lg:w-16 lg:h-16 mx-auto mb-2`} />
              <h3 className="lg:text-lg font-semibold text-teal-400">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
