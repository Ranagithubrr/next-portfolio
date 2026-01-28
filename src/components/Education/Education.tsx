"use client";
import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/constants/constants";
import InViewMotion from "../AnimationComp/Inviewmotion";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, type: "spring", stiffness: 140, damping: 18 },
  }),
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 lg:px-16">
      <InViewMotion>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Education
          </h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
            Diploma completed and currently pursuing a BSc in Engineering.
          </p>
          <div className="grid gap-6 md:grid-cols-2 text-left">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="glass-panel rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-[0_12px_35px_rgba(2,6,23,0.55)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {edu.title}
                  </h3>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    {edu.status}
                  </span>
                </div>
                {edu.institution && (
                  <p className="mt-2 text-sm text-slate-300">{edu.institution}</p>
                )}
                {edu.duration && (
                  <p className="mt-1 text-sm text-slate-400">{edu.duration}</p>
                )}
                {edu.description && (
                  <p className="mt-4 text-slate-200 leading-relaxed">
                    {edu.description}
                  </p>
                )}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {edu.highlights.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </InViewMotion>
    </section>
  );
};

export default Education;
