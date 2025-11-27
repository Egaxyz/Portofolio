export default function Navbar() {
  return (
    <aside className="w-full shadow-sm p-5 pr-10 mr-3 flex justify-end select-none">
      <nav className="flex gap-6 text-md font-medium">
        <a
          href="#header"
          className="text-gray-300 hover:bg-white hover:text-black hover:rounded-full p-1 transition cursor-pointer"
        >
          Header
        </a>
        <a
          href="about"
          className="text-gray-300 hover:bg-white hover:text-black hover:rounded-full p-1 transition cursor-pointer"
        >
          About me
        </a>
        <a
          href="#projects"
          className="text-gray-300 hover:bg-white hover:text-black hover:rounded-full p-1 transition cursor-pointer"
        >
          Projects
        </a>
        <a
          href="../CV/cv.pdf"
          download
          className="text-gray-300 hover:bg-white hover:text-black hover:rounded-full p-1 transition cursor-pointer"
        >
          CV
        </a>
      </nav>
    </aside>
  );
}
