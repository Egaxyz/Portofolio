import TextType from "./TextType.jsx";
import {
  SiReact,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiGithub,
  SiVercel,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { FaLaravel, FaBootstrap, FaVuejs } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io";
export default function About() {
  const frontendTech = [
    { name: "Laravel Blade", icon: FiFileText },
    { name: "React JS", icon: SiReact },
    { name: "Vue JS", icon: FaVuejs },
  ];

  const backendTech = [
    { name: "Laravel", icon: FaLaravel },
    { name: "Node.js", icon: IoLogoNodejs },
    { name: "PHP", icon: SiPhp },
  ];

  const otherTech = [
    { name: "Python", icon: SiPython },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Github", icon: SiGithub },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Vercel", icon: SiVercel },
  ];

  const TechCard = ({ name, Icon }) => (
    <div className="flex flex-col items-center justify-center dark:bg-[#1f2937] bg-slate-500 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
      <Icon className="w-10 h-10 text-white mb-2" />
      <p className="text-white text-sm mt-1">{name}</p>
    </div>
  );

  return (
    <section
      id="about"
      className="font-semibold text-base md:text-base lg:text-2xl px-5 py-20"
    >
      <div className="max-w-6xl items-center mx-auto flex flex-col">
        <div className="text-4xl dark:text-white text-black text-center">
          <TextType
            text={["Tech That I use", "Front End", "Back End"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div className="mt-10 w-full grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl mb-6 dark:text-white text-black text-center">
              Frontend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-6">
              {frontendTech.map((tech) => (
                <TechCard key={tech.name} Icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl mb-6 dark:text-white text-black text-center ">
              Backend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-6">
              {backendTech.map((tech) => (
                <TechCard key={tech.name} Icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 w-full">
          <h3 className="text-2xl mb-6 dark:text-white text-black text-center">
            Other
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-4 gap-6 justify-center">
            {otherTech.map((tech) => (
              <TechCard key={tech.name} Icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
