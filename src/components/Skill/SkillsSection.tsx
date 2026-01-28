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
    <section id="skills" className="py-20 px-6 lg:px-16">
      <InViewMotion>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Skills & Tooling
          </h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
            A focused stack for building fast, delightful, and accessible web experiences.
          </p>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="animate"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="glass-panel group rounded-2xl px-4 py-6 transition-transform duration-300 hover:-translate-y-2"
                variants={floatingVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/60">
                  <skill.Icon className={`${skill.color} w-8 h-8`} />
                </div>
                <h3 className="text-sm font-semibold text-slate-100">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InViewMotion>
    </section>
  );
};

export default SkillsSection;
