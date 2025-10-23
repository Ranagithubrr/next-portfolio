import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { projectsData } from "@/constants/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

const ListviewProjects: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="relative w-full ">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectCube]}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                effect="cube"
                speed={1200}
                loop={true}
                autoHeight={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                className="rounded-2xl shadow-lg cursor-grab"
            >
                {projectsData.map((project) => (
                    <SwiperSlide key={project.id}>
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            tech={project.tech}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ✅ Custom navigation buttons (only once) */}
            <div className="flex justify-end gap-6 mt-4">
                <button ref={prevRef} className="text-3xl text-teal-500 hover:text-teal-300 transition">
                    <FaArrowCircleLeft />
                </button>
                <button ref={nextRef} className="text-3xl text-teal-500 hover:text-teal-300 transition">
                    <FaArrowCircleRight />
                </button>
            </div>
        </div>
    );
};

export default ListviewProjects;
