"use client";
import { motion } from "framer-motion";
import Link from "next/link";
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
            <div className="overflow-hidden h-screen max-h-[800px] relative bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-8">
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
                        I&apos;m a passionate <span className="text-teal-400">Front End Software Developer </span>
                        who loves building amazing web experiences with modern technologies.
                    </motion.p>

                    <div className="flex justify-center space-x-6">
                        {[
                            { icon: <FaGithub />, link: "https://github.com/ranagithubrr" },
                            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rana-rr/" },
                            { icon: <FaWhatsapp />, link: "https://wa.me/+8801996722640" },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                target="_blank"
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
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center justify-center mt-6"
                >
                    <Link
                        href="/resume.pdf"
                        download
                        className="relative inline-flex items-center px-8 py-3 overflow-hidden font-semibold text-white rounded-xl group"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 group-hover:opacity-100 blur-md transition-all duration-500"></span>
                        <span className="absolute inset-0 w-full h-full bg-[#1F2538] border border-cyan-400/50 rounded-xl"></span>
                        <span className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000"></span>
                        <span className="relative flex items-center gap-2 text-lg tracking-wide group-hover:scale-105 transition-transform duration-300">
                            📄 Get Resume
                        </span>
                    </Link>
                </motion.div>


            </div>
        </section>
    );
};

export default Hero;
