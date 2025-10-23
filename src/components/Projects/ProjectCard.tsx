"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectCardProps {
    image: string | StaticImageData;
    title: string;
    description: string;
    link?: string;
    tech: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    title,
    description,
    link,
    tech,
}) => {
    return (
        <div
            className="mx-auto bg-gray-900 rounded-2xl overflow-hidden
        shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
        transition-all duration-300 max-w-7xl h-[600px] md:h-[300px]"
        >
            <div className="flex flex-col md:flex-row">
                {/* Left Image */}
                <div className="md:w-1/2 w-full relative">
                    <div className="w-full relative aspect-[16/9] md:h-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>


                {/* Right Content */}
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {title}
                        </h2>

                        {/* Technologies */}
                        <p className="text-sm text-teal-500 font-medium mb-4">{tech}</p>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Button */}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block px-5 py-2 rounded-xl border-2 border-teal-500 text-teal-600 dark:text-white font-medium hover:bg-teal-500 hover:text-white transition-all text-center"
                        >
                            View Project
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
