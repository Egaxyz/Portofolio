export default function Header() {
  return (
    <header className="">
      <h1 className="text-5xl font-extrabold text-white">
        Ega Gunawan Novaldi
      </h1>
      <p className="text-lg text-gray-400 mt-4">Fullstack Developer</p>
      <a
        href="../CV/cv.pdf"
        download
        className="inline-flex items-center px-3 py-2 my-4 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
      >
        📄 Download CV
      </a>
    </header>
  );
}
