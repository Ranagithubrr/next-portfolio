import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

const ListviewProjects: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectCube]}
                pagination={{ clickable: true }}
                effect="cube"
                speed={2000}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                className="rounded-2xl shadow-lg cursor-grab"
            >
                <SwiperSlide>
                    <ProjectCard
                        image="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=870&auto=format&fit=crop"
                        title="Real Estate Management System"
                        description="A modern web app for managing real estate properties, including dashboard analytics, property listings, and user management."
                        link="https://example.com"
                        stacks="React, Tailwind CSS, MUI"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard
                        image="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=870&auto=format&fit=crop"
                        title="Car Management System"
                        description="A powerful tool for managing vehicle sales, service schedules, and inventory with real-time updates."
                        link="https://example.com"
                        stacks="React, Redux, Ant Design"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard
                        image="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=870&auto=format&fit=crop"
                        title="Hospital Management System"
                        description="An efficient hospital management solution for doctors, patients, and administrators."
                        link="https://example.com"
                        stacks="React, Nest.js, Tailwind CSS"
                    />
                </SwiperSlide>
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="flex justify-end gap-6 mt-4">
                <button ref={prevRef} className="text-3xl text-teal-500 hover:text-teal-300">
                    <FaArrowCircleLeft />
                </button>
                <button ref={nextRef} className="text-3xl text-teal-500 hover:text-teal-300">
                    <FaArrowCircleRight />
                </button>
            </div>
        </div>
    );
};

export default ListviewProjects;
