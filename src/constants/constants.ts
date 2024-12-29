import { RiReactjsFill, RiTailwindCssFill, RiNodejsFill } from "react-icons/ri";
import {
  SiJavascript,
  SiPython,
  SiMongodb,
  SiTypescript,
  SiGit,
} from "react-icons/si";
import PropadyaLogo from '../img/propadya.svg';

// skills data
// ********** if You add new colors, include them in the tailwind.config file safelist ***** //
export const skillsData = [
  { Icon: RiReactjsFill, name: "React", color: "text-teal-400" },
  { Icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-teal-400" },
  { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { Icon: SiPython, name: "Python", color: "text-blue-400" },
  { Icon: RiNodejsFill, name: "Node.js", color: "text-green-500" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { Icon: SiGit, name: "Git", color: "text-red-400" },
];
// experience data
export const experienceData = [
  {
    id: 1,
    title: "Front End Developer",
    company: "ABC Tech",
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained the front end of multiple web applications using React, Tailwind, and other modern technologies.",
    logo: "https://niftyitsolution.com/wp-content/uploads/2024/06/nifty_thumbs-1.png",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "XYZ Solutions",
    duration: "Jul 2018 - Dec 2019",
    description:
      "Collaborated with designers and backend developers to create responsive websites and web applications.",
      logo: PropadyaLogo
  },
  {
    id: 3,
    title: "Web Developer",
    company: "XYZ Solutions",
    duration: "Jul 2018 - Dec 2019",
    description:
      "Collaborated with designers and backend developers to create responsive websites and web applications.",
  },
];

// clients feedback data
export const clientFeedbacksData = [
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

// projects data
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully functional e-commerce platform.",
    tech: "fullstack",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1729550772333-9133b2c19d7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A clean and interactive portfolio.",
    tech: "react",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1729550772333-9133b2c19d7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Real Estate App",
    description: "Property listing platform with advanced filters.",
    tech: "fullstack",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1729550772333-9133b2c19d7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "UI Kit Design",
    description: "A collection of reusable UI components.",
    tech: "ui",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1729550772333-9133b2c19d7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
