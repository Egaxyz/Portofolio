import Particle from "./Particle";

export default function About() {
  return (
    <section id="header" className="py-10">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Particle
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="flex justify-center items-start pt-20">
        <div className="flex max-w-5xl gap-28 px-16">
          <div className="flex flex-col mt-16">
            <h2 className="text-6xl font-bold tracking-widest text-white">
              W E L C O M E
            </h2>

            <div className="relative mt-6 pl-6">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-400 to-emerald-400" />

              <p className="text-lg leading-relaxed text-gray-300">
                I’m Ega Gunawan Novaldi, a Full Stack Developer who enjoys
                building responsive and efficient web applications. I work with
                modern technologies like JavaScript, React, Laravel, and Node.js
                to turn ideas into real digital products. Currently, I’m
                expanding my skills in Python and Go to explore scalable backend
                solutions.
              </p>
              <a href="../CV/cv.pdf" download>
                <button
                  className="
                    flex items-center justify-center gap-2
                    border border-white font-semibold
                    w-60 h-12
                    rounded-sm my-4
                    text-white
                    hover:bg-white hover:text-black
                    transition
                  "
                >
                  Download My CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 10.5L12 15m0 0l4.5-4.5M12 15V3"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col px-16">
            <h1 className="text-2xl mb-4">Projects</h1>
            <div className="relative p-6">
              <span className="absolute left-0 top-0 w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-tl-md" />

              <span className="absolute left-0 top-0 h-20 w-1 bg-gradient-to-b from-pink-400 to-yellow-400 rounded-tl-md" />

              <ul className="space-y-3 text-md text-gray-300">
                <li className="hover:underline hover:cursor-pointer">
                  Point Of Sale
                </li>
                <li className="hover:underline hover:cursor-pointer">ERP</li>
                <li className="hover:underline hover:cursor-pointer">
                  Edutama
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Steak House
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Inventory Management System
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
