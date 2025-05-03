export default function Header() {
  return (
    <header className="">
      <h1 className="text-2xl md:text-3xl font-extrabold text-white">
        Ega Gunawan Novaldi
      </h1>
      <p className="text-sm md:text-lg text-gray-400 mt-2 md:mt-4">
        Fullstack Developer
      </p>
      <a
        href="../CV/cv.pdf"
        download
        className="inline-flex items-center px-2 py-1 md:px-3 md:py-2 my-3 md:my-4 bg-cyan-500 text-xs md:text-base text-white rounded hover:bg-cyan-600 transition"
      >
        📄 Download CV
      </a>
    </header>
  );
}
