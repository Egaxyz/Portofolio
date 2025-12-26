import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <aside
      className=" fixed top-0 right-0 
        w-auto 
        shadow-sm 
        p-5 pr-10 
        flex justify-end 
        select-none
        bg-transparent
        z-50"
    >
      <nav className="flex gap-6 text-md font-medium">
        <a
          href="#header"
          className="text-gray-300 hover:bg-white hover:text-black hover:rounded-full p-1 cursor-pointer"
        >
          Header
        </a>
        <a
          href="#about"
          className="text-gray-300 hover:bg-white hover:text-black hover:rounded-full p-1 cursor-pointer"
        >
          Skill
        </a>
        <a
          href="#projects"
          className="text-gray-300 hover:bg-white hover:text-black hover:rounded-full p-1 cursor-pointer"
        >
          Projects
        </a>
        <a href="https://github.com/Egaxyz" target="blank">
          <FaGithub className="text-gray-300 h-8 w-8 hover:text-black hover:rounded-full  cursor-pointer " />
        </a>
      </nav>
    </aside>
  );
}
