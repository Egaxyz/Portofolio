import { LayoutDashboard, FileCode2 } from "lucide-react";
import { FaLaravel, FaBootstrap, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const iconMap = {
  "Laravel 11": <FaLaravel className="w-4 h-4 text-red-500" />,
  "Laravel Breeze": <FaLaravel className="w-4 h-4 text-red-500" />,
  Bootstrap: <FaBootstrap className="w-4 h-4 text-purple-500" />,
  "Bootstrap 5": <FaBootstrap className="w-4 h-4 text-purple-500" />,
  "Vue.js": <FaVuejs className="w-4 h-4 text-green-500" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4 text-cyan-400" />,
  MySQL: <SiMysql className="w-4 h-4 text-yellow-400" />,
};

const projects = [
  {
    title: "RestoPOS – Restaurant Cashier Web App",
    description:
      "A point-of-sale system designed for restaurants to handle order transactions, manage menu items, monitor real-time order statuses, and generate comprehensive sales reports.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/RestoPOS",
    tech: ["Laravel 11", "Bootstrap 5", "MySQL"],
  },
  {
    title: "Edutama Laundry – Frontend Management System",
    description:
      "A user-friendly interface for laundry staff to track transactions, update order status, and access daily reports to streamline service workflows.",
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    link: null, // Private repo
    tech: ["Vue.js", "Tailwind CSS"],
  },
  {
    title: "Peminjaman Barang – Item Lending Platform",
    description:
      "A web-based inventory system to manage item borrowing with features like user loan records, item status updates.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/gudang-barang",
    tech: ["Laravel 11", "Bootstrap", "MySQL"],
  },
  {
    title: "To-do List – Task Management App",
    description:
      "A simple and efficient to-do list application allowing users to create, edit, and organize tasks for better daily productivity.",
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    link: "https://github.com/Egaxyz/Todolist",
    tech: ["Laravel Breeze", "Vue.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#2a2a40] p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between h-full"
          >
            <div className="space-y-2">
              <div>{project.icon}</div>
              <h3 className="text-lg text-white font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-sm border border-gray-600 rounded-full px-3 py-1 text-gray-300"
                  >
                    {iconMap[tech] ?? <FileCode2 className="w-4 h-4" />}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Conditional Project Link */}
            {project.link && (
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 text-sm leading-tight hover:underline"
                >
                  <div className="whitespace-pre text-lg">
                    {"-> " + project.link}
                  </div>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
