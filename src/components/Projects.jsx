import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileCode2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  FaLaravel,
  FaBootstrap,
  FaVuejs,
  FaHtml5,
  FaJs,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
const iconMap = {
  "Laravel 11": <FaLaravel className="w-4 h-4 text-red-500" />,
  "Laravel Breeze": <FaLaravel className="w-4 h-4 text-red-500" />,
  Bootstrap: <FaBootstrap className="w-4 h-4 text-purple-500" />,
  "Bootstrap 5": <FaBootstrap className="w-4 h-4 text-purple-500" />,
  "Vue.js": <FaVuejs className="w-4 h-4 text-green-500" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4 text-cyan-400" />,
  MySQL: <SiMysql className="w-4 h-4 text-yellow-400" />,
  HTML: <FaHtml5 className="w-4 h-4 text-orange-500" />,
  JavaScript: <FaJs className="w-4 h-4 text-yellow-500" />,
  "Next.js": <SiNextdotjs className="w-4 h-4 text-black" />,
  CSS: <FaCss3 className="w-4 h-4 text-blue-500" />,
  Postgresql: <SiPostgresql className="w-4 h-4 text-blue-500" />,
  Express: <SiExpress className="w-4 h-4 text-white" />,
  NodeJs: <FaNodeJs className="w-4 h-4 text-green-500" />,
};

const projects = [
  {
    title: "RestoPOS – Restaurant Cashier Web App",
    image: "../assets/pos.png",
    description:
      "A full-featured point-of-sale (POS) web application designed to manage restaurant orders, transactions, and sales reports efficiently. This system helps streamline daily operations, improve transaction accuracy, and support better decision-making through structured reporting.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/RestoPOS",
    tech: ["Laravel 11", "Bootstrap 5", "MySQL"],
  },
  {
    title: "Inventory & Borrowing Management System",
    image: "../assets/peminjaman.png",
    description:
      "A web-based inventory and borrowing management system that enables organizations to track assets, manage users, and monitor borrowing activities in real time. The application simplifies item availability tracking, borrowing history, and reporting to ensure efficient asset management.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/gudang-barang",
    tech: ["Laravel 11", "Bootstrap", "MySQL"],
  },
  {
    title: "To-do List – Task Management App",
    image: "../assets/todo.png",
    description:
      "A simple yet effective task management application that allows users to create, edit, delete, and organize tasks efficiently. Designed to improve productivity, the app provides a clean and intuitive interface for managing daily activities and priorities.",
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/Todolist",
    tech: ["Laravel Breeze", "Vue.js"],
  },
  {
    title: "Enterprise Resource Planning (OnProgress)",
    image: "../assets/erp.png",
    description:
      "An enterprise-level ERP (Enterprise Resource Planning) application currently under development, built with Next.js, Tailwind CSS, Node.js, Express, and PostgreSQL. The system is designed to manage and integrate core business processes through a modern, responsive interface, focusing on scalability, clean architecture, and efficient data handling.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/erp",
    tech: ["Tailwind CSS", "Next.js", "NodeJs", "Express", "Postgresql"],
  },
  {
    title: "Landing Page - Steak House",
    image: "../assets/steak.png",
    description:
      "A visually appealing landing page for a steak house restaurant, designed to attract customers and showcase the menu, ambiance, and special offers. Built with HTML, CSS, and JavaScript, the landing page features responsive design and smooth animations for an engaging user experience.",
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    link: "https://landing-page-resto-omega.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 400 : -400, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 400 : -400, opacity: 0 }),
  };

  return (
    <section id="projects" className="space-y-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        My Projects
      </h1>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevProject}
          className="absolute left-[-60px] p-3 md:p-5 hover:bg-gray-700 rounded-full transition"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="
            bg-slate-500  
            dark:bg-[#1f2937] 
              p-6 md:p-8 
              rounded-3xl shadow-2xl 
              flex flex-col 
              w-full max-w-3xl
              min-h-[400px] md:min-h-[500px]
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-[#3b3b55] rounded-lg">{project.icon}</div>
              <h3 className=" text-lg md:text-2xl font-semibold">
                {project.title}
              </h3>
            </div>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 md:h-72 object-cover rounded-lg mb-4"
              />
            )}

            <p className="text-gray-300 text-sm md:text-base mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    flex items-center gap-1 
                    text-xs md:text-sm 
                    border border-gray-600 
                    px-3 py-1 rounded-full 
                    bg-slate-400
                    dark:text-white
                    text-black
                    dark:bg-[#1f1f32]
                  "
                >
                  {iconMap[tech] ?? <FileCode2 className="w-4 h-4" />}
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-400 hover:underline text-sm md:text-base"
              >
                Visit Project
              </a>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Arrow Right */}
        <button
          onClick={nextProject}
          className="absolute right-[-60px]  p-3 md:p-5 hover:bg-gray-700 rounded-full transition"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>
    </section>
  );
}
