import { projectsData } from '@/constants/constants';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const GridViewProjects = () => {
    const [filteredData, setFilteredData] = useState(projectsData);
    const [activeBtn, setActiveBtn] = useState("all");

    const handleFilterClick = (btn: string) => {
        setActiveBtn(btn);

        if (btn === "all") {
            setFilteredData(projectsData);
        } else {
            setFilteredData(projectsData.filter((item) => item.category === btn));
        }
    };
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {["all", "web-site", "web-app"].map((btn) => (
                    <motion.button
                        key={btn}
                        whileHover={{ scale: 1.1 }}
                        className={`relative px-5 py-2 rounded-full font-medium border overflow-hidden 
                             transition-all duration-300 
                             ${activeBtn === btn ? "text-slate-900 border-transparent" : "text-slate-200 border-slate-700/70 bg-slate-900/50"}`}
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
                            className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 rounded-full origin-left"
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
                            className="glass-panel rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col h-full max-w-sm rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
                                {/* Image */}
                                <div className="w-full h-48 relative flex-shrink-0">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={item.image}
                                        alt="Project Image"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 500px"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                                    <p className="text-slate-300 mt-2 line-clamp-3 flex-1">
                                        {item.description}
                                    </p>

                                    <div className="mt-4 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-2 xl:gap-0">
                                        <Link
                                            href={item.link}
                                            target='_blank'
                                            className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
                                        >
                                            View Details &rarr;
                                        </Link>
                                        <div className="flex space-x-2 mt-2 xl:mt-0">
                                            <span className="px-3 py-1 text-sm bg-slate-900/70 text-slate-200 rounded-full border border-slate-700/70">
                                             Featured Project
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default GridViewProjects
