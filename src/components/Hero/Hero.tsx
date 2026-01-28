"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosCodeDownload } from "react-icons/io";
import profile from "@/img/profile.jpeg";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delayChildren: 0.2, staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 18 } },
    };

    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute -top-20 -left-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px]" />
            <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[130px]" />
            <div className="absolute bottom-[-120px] left-1/2 h-72 w-[500px] -translate-x-1/2 rounded-full bg-amber-300/10 blur-[140px]" />

            <div className="min-h-screen max-h-[900px] px-6 py-20 sm:px-10 lg:px-16 flex items-center">
                <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                    <motion.div
                        className="space-y-7"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-emerald-200"
                            variants={itemVariants}
                        >
                            Frontend Specialist
                        </motion.span>

                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white"
                            variants={itemVariants}
                        >
                            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-200">modern interfaces</span> that feel effortless.
                        </motion.h1>

                        <motion.p
                            className="text-lg text-slate-300 max-w-xl"
                            variants={itemVariants}
                        >
                            I&apos;m Masud Rana, a frontend software developer focused on crisp UI, fluid motion, and accessible experiences powered by modern web tech.
                        </motion.p>

                        <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
                            {["Design-minded", "Performance-first", "Detail driven"].map((label) => (
                                <span
                                    key={label}
                                    className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-sm text-slate-200"
                                >
                                    {label}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div className="flex flex-wrap items-center gap-4" variants={itemVariants}>
                            <Link
                                href="#projects"
                                className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_rgba(16,185,129,0.35)] transition-transform hover:-translate-y-1"
                            >
                                View Projects
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="relative inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-6 py-3 font-semibold text-slate-100 backdrop-blur transition hover:border-emerald-300/60"
                            >
                                <IoIosCodeDownload className="text-2xl" /> Download Resume
                            </a>
                        </motion.div>

                        <motion.div className="flex items-center gap-4" variants={itemVariants}>
                            {[
                                { icon: <FaGithub />, link: "https://github.com/ranagithubrr" },
                                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rana-rr/" },
                                { icon: <FaWhatsapp />, link: "https://wa.me/+8801996722640" },
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-full text-lg text-slate-200 transition hover:text-emerald-200"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.08 }}
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative mx-auto w-full max-w-sm"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-emerald-400/20 via-cyan-400/10 to-amber-300/20 blur-2xl"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        />
                        <div className="relative glass-panel rounded-[32px] p-2">
                            <Image
                                src={profile}
                                alt="Masud Rana portrait"
                                className="h-full w-full rounded-[28px] object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-5 left-6 rounded-full bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-200 shadow-lg backdrop-blur">
                            Available for collaboration
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
