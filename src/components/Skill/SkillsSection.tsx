'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/constants/contants';


const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const floatingVariants = {
  animate: {
    y: [-15, 15, -15],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as const,
    },
  },
};

const SkillsSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 p-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Skills</h2>
        <p className="text-gray-300 mb-10">
          These are the technologies I work with.
        </p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="animate"
        >
          {skillsData.map((skill, index) => (
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
