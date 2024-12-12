'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/constants/constants';
import InViewMotion from './../AnimationComp/Inviewmotion';


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
    <section id="skills" className="bg-gradient-to-b from-gray-800 to-gray-900 lg:p-16">
      <InViewMotion>
        <div
          className="max-w-7xl mx-auto text-center">          
          <h2 className="text-3xl font-bold text-center mb-10">
                        Skills
                    </h2>
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
                <skill.Icon className={`${skill.color} w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-2`} />
                <h3 className="lg:text-lg font-semibold text-teal-400">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InViewMotion>
    </section>
  );
};

export default SkillsSection;
