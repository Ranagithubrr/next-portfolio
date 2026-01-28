"use client";
import React from "react";
import { motion } from "framer-motion";
import InViewMotion from "../AnimationComp/Inviewmotion";
import { blogData } from "@/constants/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, type: "spring", stiffness: 140, damping: 18 },
  }),
};

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 lg:px-16">
      <InViewMotion>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Latest from the blog
          </h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
            Short, practical notes on UI, performance, and building clean, scalable front-end systems.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
            {blogData.map((post, index) => (
              <motion.article
                key={post.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="glass-panel group rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-[0_14px_40px_rgba(2,6,23,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-[0_18px_55px_rgba(15,23,42,0.6)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-100 group-hover:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <a
                    href={post.link}
                    className="text-sm font-semibold text-emerald-200 transition-colors group-hover:text-emerald-100"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-emerald-300/60 hover:text-white"
            >
              View all posts
            </a>
          </div>
        </div>
      </InViewMotion>
    </section>
  );
};

export default BlogSection;
