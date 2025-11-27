export default function About() {
  return (
    <section id="about" className="py-10">
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
      <p className="text-1xl mt-8 italic">
        <span className="typing">Full Stack Developer</span>
      </p>
      <button className="bg-sky-500 text-white hover:bg-[#0d1425] hover:outline outline-offset-2 rounded-md p-1 mt-8 text-2xl font-sans">
        About Me→{" "}
      </button>
    </section>
  );
}
