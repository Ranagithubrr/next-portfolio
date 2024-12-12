"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import the coverflow effect styles
import "swiper/css/pagination"; // Import pagination styles
import { motion } from "framer-motion";
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { clientFeedbacksData } from "@/constants/constants";

const Clients = () => {
    return (
        <div className="bg-gray-900 text-white py-20 lg:px-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
                Client Feedback
            </h2>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {clientFeedbacksData.map((client, index) => (
                    <SwiperSlide key={client.id} className="max-w-sm">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="mb-6">
                                <h4 className="text-2xl font-semibold text-teal-400 mb-2">
                                    {client.name}
                                </h4>
                                <p className="text-lg font-medium text-gray-400">
                                    {client.position}
                                </p>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {client.feedback}
                            </p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Clients;
