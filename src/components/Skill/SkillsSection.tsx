'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/constants/constants';
import { FaGlobe, FaServer, FaCloud } from "react-icons/fa";
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
            className="grid gap-6 lg:grid-cols-3 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="animate"
          >
            {[
              { key: "frontend", title: "Front End", items: skillsData.frontend, bgIcon: FaGlobe },
              { key: "backend", title: "Back End", items: skillsData.backend, bgIcon: FaServer },
              { key: "deployment", title: "Deployment & Tools", items: skillsData.deployment, bgIcon: FaCloud },
            ].map((group) => (
              <div
                key={group.key}
                className="glass-panel relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-[0_12px_32px_rgba(2,6,23,0.55)]"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700/25">
                  <group.bgIcon className="h-36 w-36" />
                </div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {group.items.length} Skills
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {group.items.map((skill, index) => (
                    <motion.div
                      key={`${group.key}-${index}`}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30"
                      variants={floatingVariants}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/80 ring-1 ring-slate-700/70">
                        <skill.Icon className={`${skill.color} h-6 w-6`} />
                      </div>
                      <div className="text-sm font-semibold text-slate-100">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </InViewMotion>
    </section>
  );
};

export default SkillsSection;
