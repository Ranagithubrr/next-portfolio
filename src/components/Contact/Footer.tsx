// Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 pb-28 lg:pb-10 text-slate-300 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name / Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Masud Rana. All rights reserved.</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/ranagithubrr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rana-rr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:ranarr.dev@gmail.com" className="hover:text-white transition">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
