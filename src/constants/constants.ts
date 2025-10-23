import { RiReactjsFill, RiTailwindCssFill, RiNodejsFill } from "react-icons/ri";
import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiGit,
  SiNextdotjs,
  SiAntdesign,
  SiAxios,
  SiFirebase,
  SiFramer,
  SiGraphql,
  SiMui,
  SiRedux,
  SiSwiper,
  SiExpress,
  SiVercel,
} from "react-icons/si";

import NiftyItSolutionLogo from "../img/nifty.png";
import SoftasellLogo from "../img/softasell.png";
import NexorabyteLogo from "../img/nexorabyte.png";

import PropadyaWebsiteImage from "../img/projects/prorpadya-site.png";
import PropadyaDashboardImage from "../img/projects/propadya.png";
import NexoraByteImage from "../img/projects/nexorabyte.png";

import SomoypayWebsiteImage from "../img/projects/somoypay-site.png";
import SomoypayMerchantImage from "../img/projects/merchant-somoypay.png";
import SomoypayAdminImage from "../img/projects/admin-somoypay.png";

import PrimeClinicImage from "../img/projects/prime-clinic.png";
import PriaWebsiteImage from "../img/projects/pria-website.png";


// skills data
// ********** if You add new colors, include them in the tailwind.config file safelist ***** //
export const skillsData = [
  { Icon: RiReactjsFill, name: "React", color: "text-teal-400" },
  { Icon: SiNextdotjs, name: "Next.js", color: "text-black" },
  { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { Icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-teal-400" },
  { Icon: SiMui, name: "Material UI", color: "text-blue-500" },
  { Icon: SiAntdesign, name: "Ant Design", color: "text-blue-600" },
  { Icon: SiRedux, name: "Redux Toolkit", color: "text-purple-600" },
  { Icon: SiGraphql, name: "GraphQL", color: "text-pink-400" },
  { Icon: RiNodejsFill, name: "Node.js", color: "text-green-500" },
  { Icon: SiExpress, name: "Express.js", color: "text-gray-500" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { Icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
  { Icon: SiAxios, name: "Axios", color: "text-blue-400" },
  { Icon: SiGit, name: "Git", color: "text-red-400" },
  { Icon: SiSwiper, name: "Swiper", color: "text-purple-400" },
  { Icon: SiFramer, name: "Framer Motion", color: "text-pink-500" },
  { Icon: SiVercel, name: "Vercel", color: "text-black" }, // Optional
];

// experience data
export const experienceData = [
  {
    id: 1,
    title: "Frontend Software Developer",
    company: "Nexorabyte IT Solution",
    duration: "May 2025 - Aug 2025",
    description:
      "Developed responsive websites for medical, automotive, and corporate clients. Built interactive dashboards, integrated APIs, and optimized front-end performance to deliver scalable and user-friendly web solutions.",
    logo: NexorabyteLogo,
  },
  {
    id: 2,
    title: "Front-end Developer",
    company: "Softasell",
    duration: "Jun 2024 - Feb 2025",
    description:
      "Built responsive real estate websites with property search and listings. Implemented scalable front-end architecture using React and JavaScript, developed interactive dashboards, and improved overall performance and user experience.",
    logo: SoftasellLogo,
  },
  {
    id: 3,
    title: "Front-end Developer (Intern)",
    company: "Nifty IT Solution",
    duration: "Sep 2023 - Nov 2023",
    description:
      "Contributed to a booking management system using React.js, TypeScript, and GraphQL. Enhanced functionality and user experience through efficient front-end development and component-based design.",
    logo: NiftyItSolutionLogo,
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
    title: "Propadya Real Estate Website",
    description:
      "A modern real estate platform where users can explore properties, view detailed listings, and connect with agents. Designed for smooth navigation and optimized image performance using ImageKit.",
    tech: "React, Ant Design, Redux Toolkit, ImageKit, REST API",
    link: "https://propadya.com", // update if live
    image: PropadyaWebsiteImage,
    category: "web-site",
  },
  {
    id: 2,
    title: "Propadya Admin Dashboard",
    description:
      "An internal dashboard to manage all property listings, agents, and content for the Propadya website. Features secure authentication and advanced filtering options for efficient management.",
    tech: "React, Redux Toolkit, Ant Design, REST API",
    link: "https://app.propadya.com", 
    image: PropadyaDashboardImage,
    category: "web-app",
  },
  {
    id: 3,
    title: "Prime Clinic Healthcare System",
    description:
      "A comprehensive healthcare management platform featuring a responsive website and an admin dashboard. Designed to efficiently manage doctors, appointments, services, and patient records with ease.",
    tech: "React, Nest.js, Tailwind CSS, REST API",
    link: "https://primeclinic24.com/",
    image: PrimeClinicImage,
    category: "web-site",
  },
  {
    id: 4,
    title: "SomoyPay Platform",
    description:
      "A digital payment ecosystem with three integrated platforms — website, merchant panel, and admin dashboard — built to handle transactions and user management efficiently.",
    tech: "React, Redux Toolkit, Ant Design, REST API",
    link: "https://somoypay.vercel.app/", 
    image: SomoypayWebsiteImage,
    category: "web-site",
  },
  {
    id: 5,
    title: "Pria Official Website",
    description:
      "A responsive company website highlighting services, projects, and team members. Built with modern UI design and optimized performance.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    link: "https://pria-crm-frontend-landing-page.vercel.app/", // add live link if available
    image: PriaWebsiteImage,
    category: "web-site",
  },
  {
    id: 6,
    title: "NexoraByte Portfolio",
    description:
      "A digital agency portfolio showcasing case studies, services, and creative work. Designed for a sleek and professional presentation.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    link: "https://nexorabyte.com/",
    image: NexoraByteImage,
    category: "web-site",
  },
  {
    id: 7,
    title: "Somoypay Merchant Dashboard",
    description:
      "A comprehensive merchant portal for managing transactions, orders, and reports. Built with Next.js, TypeScript, and Tailwind CSS for a responsive and fast experience.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    link: "#", 
    image: SomoypayMerchantImage,
    category: "web-app",
  },
  {
    id: 8,
    title: "Somoypay Admin Panel",
    description:
      "An admin panel for overseeing all merchant activities, user management, and analytics. Developed using Next.js, TypeScript, and Tailwind CSS for a scalable and maintainable solution.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    link: "https://somoypay-admin.vercel.app/",
    image: SomoypayAdminImage,
    category: "web-app",
  },

];
