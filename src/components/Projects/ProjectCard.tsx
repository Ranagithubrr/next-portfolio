"use client";
import React from "react";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    link?: string;
    stacks: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link, stacks }) => {
    return (
        <div className="mx-auto bg-white dark:bg-gray-900 rounded-2xl overflow-hidden 
                shadow-[0_10px_30px_rgba(0,0,0,0.2)] 
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] 
                transition-shadow">

            <div className="flex flex-col md:flex-row">
                {/* Left Image */}
                <div className="md:w-1/2">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-64 md:h-full object-cover rounded-r-[80px]"
                    />
                </div>

                {/* Right Content */}
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                            {title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {description}
                        </p>
                    </div>

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 px-5 py-2 rounded-xl border-2 border-teal-500 text-white font-medium hover:bg-teal-600 transition text-center"
                        >
                            View Project
                        </a>
                    )}
                </div>
            </div>
            {/* Tech Stacks */}
            <div className="p-4 text-lg font-semibold">
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                    Technologies Used:
                </span>
                <span className="text-gray-300 font-normal"> {stacks}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
