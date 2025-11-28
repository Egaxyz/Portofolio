export default function About() {
  return (
    <section id="header" className="py-10">
      <style>{`
        .typing {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: .12em solid rgba(255,255,255,0.85);
          animation:
            typing 7s steps(20, end) infinite,
            blink .75s step-end infinite;
          width: 20ch;
        }
        @keyframes typing {
          0%   { width: 0ch; }
          26.315789% { width: 20ch; }    
          78.947368% { width: 20ch; }    
          100% { width: 0ch; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>

      <h2 className="text-4xl font-semibold">Ega Gunawan Novaldi</h2>
      <p className="text-1xl mt-5 italic">
        <span className="typing">Full Stack Developer</span>
      </p>
      <a href="../CV/cv.pdf" download>
        <button className="flex items-center gap-2 bg-sky-500 text-white hover:bg-[#0d1425] hover:outline outline-offset-2 rounded-md p-1 mt-8 text-2xl font-sans">
          Download My CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 10.5L12 15m0 0l4.5-4.5M12 15V3"
            />
          </svg>
        </button>
      </a>
    </section>
  );
}
