"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
    };

    return (
        <section id="home">
            <div className="overflow-hidden h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-8">
                <motion.div
                    className="text-center space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-5xl font-extrabold tracking-wide"
                        variants={itemVariants}
                    >
                        Hello, I&apos;m <span className="text-teal-400">Masud Rana</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-300 max-w-lg mx-auto"
                        variants={itemVariants}
                    >
                        I&apos;m a passionate <span className="text-teal-400">Front End Web Developer </span>
                        who loves building amazing web experiences with modern technologies.
                    </motion.p>

                    <div className="flex justify-center space-x-6">
                        {[
                            { icon: <FaGithub />, link: "#" },
                            { icon: <FaLinkedin />, link: "#" },
                            { icon: <FaWhatsapp />, link: "#" },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                className="text-3xl hover:text-teal-400 transition duration-300"
                                variants={itemVariants}
                                whileHover={{ scale: 1.2 }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className="absolute w-80 h-80 rounded-full bg-teal-400 opacity-10 blur-xl pointer-events-none"
                    style={{ top: "10%", left: "10%" }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-80 h-80 rounded-full bg-purple-500 opacity-5 blur-2xl"
                    style={{ bottom: "25%", right: "15%" }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
};

export default Hero;
