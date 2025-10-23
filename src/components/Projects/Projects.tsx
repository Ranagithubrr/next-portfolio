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
                className="p-8 bg-gray-900 lg:px-24 md:max-w-screen-2xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Contributed Projects
                </h2>
                <p className="text-gray-300 text-center mb-10 md:max-w-3xl mx-auto">
                    A showcase of web applications I have built and contributed to, highlighting modern technologies, real-world functionality, and responsive, user-friendly designs.
                </p>


                <div className="flex justify-center mx-auto md:mx-0 md:ms-auto gap-2 w-52 relative border-teal-400 border-2 rounded-full overflow-hidden">
                    <div
                        className="z-10 h-full cursor-pointer p-2"
                        onClick={() => handleChangeView("list")}
                    >
                        Slide View
                    </div>
                    <div
                        className="z-10 h-full cursor-pointer p-2"
                        onClick={() => handleChangeView("grid")}
                    >
                        Grid View
                    </div>

                    <motion.div
                        className="bg-teal-500 w-1/2 h-full absolute top-0 left-0"
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
