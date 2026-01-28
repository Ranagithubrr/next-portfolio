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
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="animate"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="glass-panel group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-6 shadow-[0_10px_28px_rgba(2,6,23,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-[0_18px_50px_rgba(15,23,42,0.6)]"
                variants={floatingVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-60">
                  <div className="absolute inset-0 bg-[radial-gradient(140px_140px_at_20%_10%,rgba(148,163,184,0.12),transparent_70%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(160px_140px_at_80%_90%,rgba(148,163,184,0.12),transparent_70%)]" />
                </div>
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/70 ring-1 ring-slate-700/70 shadow-[0_10px_22px_rgba(2,6,23,0.45)] transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-emerald-300/40 group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.15),0_14px_30px_rgba(14,116,144,0.28)]">
                  <skill.Icon className={`${skill.color} h-8 w-8`} />
                </div>
                <h3 className="relative text-sm font-semibold text-slate-100 tracking-wide drop-shadow-[0_6px_18px_rgba(2,6,23,0.45)]">
                  {skill.name}
                </h3>
                <div className="absolute inset-x-5 bottom-3 h-px bg-gradient-to-r from-emerald-400/70 via-cyan-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InViewMotion>
    </section>
  );
};

export default SkillsSection;
