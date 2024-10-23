"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import the coverflow effect styles
import "swiper/css/pagination"; // Import pagination styles
import { motion } from "framer-motion";
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


const clientFeedbacks = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO at ABC Corp",
        feedback:
            "Working with Masud was a pleasure! He delivered outstanding work and went above and beyond my expectations.",
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "CTO at XYZ Ltd",
        feedback:
            "Masud's expertise in front-end development was crucial in the success of our project. Highly recommended!",
    },
    {
        id: 3,
        name: "Mark Johnson",
        position: "Product Manager at Tech Solutions",
        feedback:
            "Professional, creative, and very efficient. Masud delivered everything on time and with high quality.",
    },
    {
        id: 4,
        name: "Mark Johnson",
        position: "Product Manager at Tech Solutions",
        feedback:
            "Professional, creative, and very efficient. Masud delivered everything on time and with high quality.",
    },
    {
        id: 5,
        name: "Mark Johnson",
        position: "Product Manager at Tech Solutions",
        feedback:
            "Professional, creative, and very efficient. Masud delivered everything on time and with high quality.",
    },
];

const Clients = () => {
    return (
        <div className="bg-gray-900 text-white py-20 px-20">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-teal-400">
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
                {clientFeedbacks.map((client, index) => (
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
