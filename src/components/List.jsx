import { useEffect, useState } from "react";
import { FaUser, FaFolderOpen } from "react-icons/fa";

export default function List() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
  ];

  return (
    <div className="mt-4">
      <ul className="space-y-3">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-center gap-2 transition duration-300 group ${
                  isActive
                    ? "text-cyan-400 text-2xl underline font-semibold"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                <span
                  className={`transition-transform duration-300 ${
                    isActive
                      ? "scale-125 text-cyan-400"
                      : "group-hover:scale-110"
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
