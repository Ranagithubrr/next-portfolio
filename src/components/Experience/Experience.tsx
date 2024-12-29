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
                <div
                    className="bg-gray-900 text-white py-10 px-5">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Professional Experience
                    </h2>
                    <div className="relative max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="absolute w-[3px] bg-teal-400 h-full left:0 lg:left-1/2 transform -translate-x-1/2" />

                        {experienceData.map((experience, index) => (
                            <motion.div
                                key={experience.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex items-start mb-10 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} justify-between`}
                            >
                                <div className={`bg-gray-800 rounded-lg p-6 ml-2 lg:ml-0 shadow-lg max-w-md ${index % 2 === 0 ? "-mr-1" : "mr-2"}`}>
                                    <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-teal-400">{experience.title}</h3>
                                    {experience.logo && 
                                    <Image 
                                    alt="logo" 
                                    src={experience?.logo}
                                    width={50}
                                    height={50}     
                                    className="rounded-md cursor-pointer"                                                                
                                    />
                                    }
                                    </div>
                                    <p className="text-sm text-gray-400">{experience.company}</p>
                                    <span className="block text-gray-400 mb-2">{experience.duration}</span>
                                    <p>{experience.description}</p>
                                </div>

                                <div className="w-8 h-8 bg-teal-400 rounded-full absolute left:0 lg:left-1/2 transform -translate-x-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </InViewMotion>
        </section>
    );
};

export default Experience;
