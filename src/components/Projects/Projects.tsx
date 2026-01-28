"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import InViewMotion from "../AnimationComp/Inviewmotion";
import GridViewProjects from "./GridViewProjects";
import ListviewProjects from "./ListviewProjects";

const FilterableProjects = () => {
    const [activeView, setActiveView] = useState<"grid" | "list">("list");
    const [isFlipping, setIsFlipping] = useState(false);

    const handleChangeView = (view: "grid" | "list") => {
        if (view === activeView) return;
        setIsFlipping(true);
        setTimeout(() => {
            setActiveView(view);
            setIsFlipping(false);
        }, 300);
    };

    return (
        <InViewMotion>
            <section
                id="projects"
                className="py-20 px-6 lg:px-16 md:max-w-screen-2xl mx-auto"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-4">
                    Featured Projects
                </h2>
                <p className="text-slate-300 text-center mb-10 md:max-w-3xl mx-auto">
                    A curated mix of products, platforms, and experiments focused on polished UI, responsive layouts, and modern front-end architecture.
                </p>

                <div className="flex justify-center md:justify-end mx-auto md:mx-0 gap-2 w-56 relative rounded-full overflow-hidden border border-slate-700/70 bg-slate-900/60 backdrop-blur">
                    <button
                        className="z-10 flex-1 cursor-pointer py-2 text-sm font-medium text-slate-200"
                        onClick={() => handleChangeView("list")}
                    >
                        Slide View
                    </button>
                    <button
                        className="z-10 flex-1 cursor-pointer py-2 text-sm font-medium text-slate-200"
                        onClick={() => handleChangeView("grid")}
                    >
                        Grid View
                    </button>

                    <motion.div
                        className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 w-1/2 h-full absolute top-0 left-0"
                        animate={{ x: activeView === "list" ? 0 : "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    />
                </div>
                <motion.div
                    className="mt-8"
                    animate={{ rotateY: isFlipping ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeView === "grid" ? (
                        <GridViewProjects />
                    ) : (
                        <div className="text-white p-6 rounded-xl">
                            <ListviewProjects />
                        </div>
                    )}
                </motion.div>
            </section>
        </InViewMotion>
    );
};

export default FilterableProjects;
