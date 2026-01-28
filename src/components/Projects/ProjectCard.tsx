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
            className="mx-auto glass-panel rounded-3xl overflow-hidden
        shadow-[0_24px_60px_rgba(2,6,23,0.5)] hover:shadow-[0_32px_80px_rgba(2,6,23,0.6)]
        transition-all duration-300 max-w-7xl h-[600px] md:h-[320px] 2xl:h-[360px]"
        >
            <div className="flex flex-col md:flex-row">
                {/* Left Image */}
                <div className="md:w-1/2 w-full relative">
                    <div className="w-full relative aspect-[16/9] md:h-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>


                {/* Right Content */}
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            {title}
                        </h2>

                        {/* Technologies */}
                        <p className="text-sm text-emerald-300 font-medium mb-4">{tech}</p>

                        {/* Description */}
                        <p className="text-slate-300 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Button */}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block px-5 py-2 rounded-xl border border-emerald-300/50 text-emerald-200 font-medium hover:bg-emerald-400 hover:text-slate-900 transition-all text-center"
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
