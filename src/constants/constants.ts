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
} from "react-icons/si";

import PropadyaLogo from "../img/propadya.svg";
import SomoyPayLogo from "../img/somoypay.png";

import PropadyaWebsiteImage from "../img/projects/pria-website.png";
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
  { Icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-teal-400" },
  { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { Icon: RiNodejsFill, name: "Node.js", color: "text-green-500" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { Icon: SiGit, name: "Git", color: "text-red-400" },
  { Icon: SiRedux, name: "Redux", color: "text-purple-600" },
  { Icon: SiGraphql, name: "GraphQL", color: "text-pink-400" },
  { Icon: SiAxios, name: "Axios", color: "text-blue-400" },
  { Icon: SiAntdesign, name: "Ant Design", color: "text-blue-600" },
  { Icon: SiMui, name: "MUI", color: "text-blue-500" },
  { Icon: SiSwiper, name: "Swiper", color: "text-purple-400" },
  { Icon: SiFramer, name: "Framer Motion", color: "text-pink-500" },
  { Icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
];
// experience data
export const experienceData = [
  {
    id: 1,
    title: "Front-end Web Developer",
    company: "Propadya LLC",
    duration: "Jun 2024 - Present",
    description:
      "Developed responsive UIs for real estate applications, ensuring usability and performance. Integrated APIs and optimized speed, enhancing functionality and user engagement. Increased performance by 30% through optimizations and API integrations",
    logo: PropadyaLogo,
  },
  {
    id: 2,
    title: "Junior Front-end Developer",
    company: "SomoyPay",
    duration: "Feb 2024 - May 2014",
    description:
      "Built a high-performance payment gateway app with scalable features to optimize transactions and enhance client engagement. Designed and implemented core logic to streamline workflows and boost functionality. Improved response times for faster data handling, delivering a smooth and responsive user experience throughout the app",
    logo: SomoyPayLogo,
  },
  {
    id: 3,
    title: "Front-end Developer Intern",
    company: "Nifty IT Solution",
    duration: "Sep 2023 - Nov 2023",
    description:
      "Contributed to web development projects using React, TypeScript, and GraphQL, gaining hands-on experiencein modern technologies. Developed front-end features and enhanced applications with React and TypeScript",
    logo: "https://niftyitsolution.com/wp-content/uploads/2024/06/nifty_thumbs-1.png",
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
  },
  {
    id: 2,
    title: "Propadya Admin Dashboard",
    description:
      "An internal dashboard to manage all property listings, agents, and content for the Propadya website. Features secure authentication and advanced filtering options for efficient management.",
    tech: "React, Redux Toolkit, Ant Design, REST API",
    link: "#", // replace with actual dashboard link if deployed
    image: PropadyaDashboardImage,
  },
  {
    id: 3,
    title: "Slope Medical Solution",
    description:
      "A complete healthcare management system with a dynamic website and content dashboard. Built to manage doctors, services, and medical resources seamlessly.",
    tech: "React, Nest.js, Tailwind CSS, REST API",
    link: "#", // add real link if deployed
    image: PrimeClinicImage,
  },
  {
    id: 4,
    title: "SomoyPay Platform",
    description:
      "A digital payment ecosystem with three integrated platforms — website, merchant panel, and admin dashboard — built to handle transactions and user management efficiently.",
    tech: "React, Redux Toolkit, Ant Design, REST API",
    link: "#", // optional
    image: SomoypayWebsiteImage,
    subProjects: [
      {
        name: "Merchant Dashboard",
        image: SomoypayMerchantImage,
      },
      {
        name: "Admin Dashboard",
        image: SomoypayAdminImage,
      },
    ],
  },
  {
    id: 5,
    title: "Pria Official Website",
    description:
      "A responsive company website highlighting services, projects, and team members. Built with modern UI design and optimized performance.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    link: "#", // add live link if available
    image: PriaWebsiteImage,
  },
  {
    id: 6,
    title: "NexoraByte Portfolio",
    description:
      "A digital agency portfolio showcasing case studies, services, and creative work. Designed for a sleek and professional presentation.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    link: "#", // optional
    image: NexoraByteImage,
  },
];
