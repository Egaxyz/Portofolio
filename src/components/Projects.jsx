import { LayoutDashboard, FileCode2 } from "lucide-react";
import {
  FaLaravel,
  FaBootstrap,
  FaVuejs,
  FaHtml5,
  FaJs,
  FaCss3,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiNextdotjs } from "react-icons/si";

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
};

const projects = [
  {
    title: "RestoPOS – Restaurant Cashier Web App",
    description:
      "A comprehensive point-of-sale system for restaurant order management, billing, and reporting feature that streamlines operations and enhances customer service efficiency, the perfect solution for modern sales management.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/RestoPOS",
    tech: ["Laravel 11", "Bootstrap 5", "MySQL"],
  },
  {
    title: "Edutama Laundry – Frontend Management System",
    description:
      "A web-based laundry management system for handling orders, customers, and transactions efficiently with a user-friendly interface and responsive design. Features include order tracking, customer management, and reporting.",
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    link: null,
    tech: ["Vue.js", "Tailwind CSS"],
  },
  {
    title: "Inventory & Borrowing Management System",
    description:
      "A web application to manage inventory and borrowing of items, featuring item tracking, user management, and reporting functionalities. Ideal for organizations to streamline their asset management processes. The system allows users to easily borrow and return items while keeping track of inventory levels.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/gudang-barang",
    tech: ["Laravel 11", "Bootstrap", "MySQL"],
  },
  {
    title: "To-do List – Task Management App",
    description:
      "A simple and intuitive to-do list application that helps users organize and manage their tasks effectively. Features include task creation, editing, deletion, and categorization to enhance productivity and task tracking.",
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/Todolist",
    tech: ["Laravel Breeze", "Vue.js"],
  },
  {
    title: "ERP –  Website",
    description:
      "A modern and responsive ERP (Enterprise Resource Planning) website built with Next.js and Tailwind CSS, showcasing various business solutions and services. The website features a clean design, easy navigation, and optimized performance for an enhanced user experience.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    link: "https://erp-nextjs-ui-i979.vercel.app/",
    tech: ["Tailwind CSS", "Next.js"],
  },
  {
    title: "Landing Page - Steak House",
    description:
      "A visually appealing landing page for a steak house restaurant, designed to attract customers and showcase the menu, ambiance, and special offers. Built with HTML, CSS, and JavaScript, the landing page features responsive design and smooth animations for an engaging user experience.",
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    link: "https://landing-page-resto-omega.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      {/* Title */}
      <h1 className="text-xl md:text-3xl text-white font-bold">Projects</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="
              bg-[#202035] 
              p-4 md:p-6 
              rounded-xl shadow-lg 
              flex flex-col 
              min-h-[260px] md:min-h-[330px]
              hover:scale-[1.05] md:hover:scale-[1.1] 
              hover:shadow-xl 
              transition-all duration-200
            "
          >
            {/* Header */}
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="p-2 md:p-2.5 bg-[#3b3b55] rounded-lg">
                {project.icon}
              </div>
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    flex items-center gap-1 
                    text-xs md:text-sm 
                    border border-gray-600 
                    px-2 md:px-3 
                    py-1 
                    rounded-full 
                    text-gray-300 
                    bg-[#1f1f32]
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
                className="mt-auto text-blue-400 hover:underline text-xs md:text-sm"
              >
                {project.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
