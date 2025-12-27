import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="dark:bg-[#1f2937] bg-slate-400 border-t border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Ezio Joestar</h2>
            <p className=" text-sm leading-relaxed">
              Web Developer passionate about building modern, scalable, and
              user-friendly applications using modern technologies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2  text-sm">
              <li>
                <a href="#header" className="hover:text-white transition">
                  Header
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              {/* <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>

          <div className="sm:hidden">
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Egaxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-[#1f2937] bg-slate-500 text-gray-400 hover:text-white hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="http://linkedin.com/in/ega-gunawan-novaldi-765b87348/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-[#1f2937] bg-slate-500 text-gray-400 hover:text-white hover:bg-gray-700 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=egagunawannovaldi@gmail.com"
                target="blank"
                className="p-2 rounded-lg dark:bg-[#1f2937] bg-slate-500 text-gray-400
                hover:text-white hover:bg-gray-700 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              © {new Date().getFullYear()} Egaxyz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
