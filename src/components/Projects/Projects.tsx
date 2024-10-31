"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/constants/contants";
import InViewMotion from "../AnimationComp/Inviewmotion";


const FilterableProjects = () => {
    const [activeBtn, setActiveBtn] = useState("all");
    const [filteredData, setFilteredData] = useState(projectsData);

    const handleFilterClick = (btn: string) => {
        setActiveBtn(btn);

        if (btn === "all") {
            setFilteredData(projectsData);
        } else {
            setFilteredData(projectsData.filter((item) => item.tech === btn));
        }
    };

    return (
        <InViewMotion>
        <section id="projects" className="p-8 bg-gray-900 lg:px-20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
                My Projects
            </h2>

            <div className="flex justify-center space-x-4 mb-8">
                {["all", "react", "ui"].map((btn) => (
                    <motion.button
                        key={btn}
                        whileHover={{ scale: 1.1 }} // Slight scaling on hover
                        className={`relative px-5 py-1 rounded-full font-medium border-2 overflow-hidden 
                             transition-all duration-300 
                             ${activeBtn === btn ? "text-white border-teal-700" : "text-white border-teal-700"}`}
                        onClick={() => handleFilterClick(btn)}
                    >
                        {/* Button text */}
                        <span className="relative z-10">{btn.charAt(0).toUpperCase() + btn.slice(1)}</span>

                        {/* Animated background fill */}
                        <motion.span
                            layout
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: activeBtn === btn ? 1 : 0 }}
                            whileHover={{ scaleX: 1 }} // Expand background on hover
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="absolute inset-0 bg-teal-700 rounded-full origin-left"
                        ></motion.span>
                    </motion.button>


                ))}
            </div>
            <motion.div
                layout
                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence>
                    {filteredData.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 1, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 1, scale: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="max-w-sm bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
                                <Image
                                    className="w-full h-48 object-cover"
                                    src={item.image}
                                    alt="Project Image"
                                    width={100}
                                    height={100}
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-white">Project Title</h2>
                                    <p className="text-gray-400 mt-2">
                                        This is a short description of the project. It explains the purpose, tools, and technologies used.
                                    </p>
                                    <div className="lg:flex items-center justify-between mt-4">
                                        <a
                                            href="#"
                                            className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
                                        >
                                            View Details &rarr;
                                        </a>
                                        <div className="lg:flex space-x-2 mt-2 lg:mt-0 hidden">
                                            <span className="px-3 py-1 text-sm bg-gray-800 text-teal-300 rounded-full">
                                                React
                                            </span>
                                            <span className="px-3 py-1 text-sm bg-gray-800 text-teal-300 rounded-full">
                                                Tailwind CSS
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
        </InViewMotion>
    );
};

export default FilterableProjects;
