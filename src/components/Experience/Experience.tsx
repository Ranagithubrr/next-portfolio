"use client"
import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/constants/constants";
import InViewMotion from "../AnimationComp/Inviewmotion";
import Image from "next/image";


const Experience = () => {
    return (
        <section id="experience">
            <InViewMotion>
                <div className="py-20 px-6 lg:px-16">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-center text-white mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
                        Building reliable products with teams that value clarity, speed, and quality.
                    </p>
                    <div className="relative max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="absolute w-[2px] bg-gradient-to-b from-emerald-300 via-cyan-300 to-transparent h-full left:0 lg:left-1/2 transform -translate-x-1/2 opacity-70" />

                        {experienceData.map((experience, index) => (
                            <motion.div
                                key={experience.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex items-start mb-10 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} justify-between`}
                            >
                                <div className={`glass-panel rounded-2xl p-6 ml-2 lg:ml-0 shadow-lg max-w-md ${index % 2 === 0 ? "-mr-1" : "mr-2"}`}>
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-semibold text-emerald-200">{experience.title}</h3>
                                        {experience.logo && 
                                        <Image 
                                        alt="logo" 
                                        src={experience?.logo}
                                        width={100}
                                        height={60}     
                                        className="rounded-md cursor-pointer"                                                                
                                        />
                                        }
                                    </div>
                                    <p className="text-sm text-slate-400">{experience.company}</p>
                                    <span className="block text-slate-400 mb-2">{experience.duration}</span>
                                    <p className="text-slate-200">{experience.description}</p>
                                </div>

                                <div className="w-8 h-8 rounded-full absolute left:0 lg:left-1/2 transform -translate-x-1/2 bg-slate-950 ring-2 ring-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.45)]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </InViewMotion>
        </section>
    );
};

export default Experience;
