import Particle from "./Particle";

export default function Header({ theme }) {
  const particleColors =
    theme === "dark" ? ["#ffffff", "#ffffff"] : ["#84cdee", "#84cdee"];
  console.log("theme:", theme, particleColors);

  return (
    <section id="header" className="py-10 dark:text-gray-300">
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
          key={theme}
          particleColors={particleColors}
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
        <div className="flex flex-col lg:flex-row max-w-5xl gap-12 lg:gap-28 px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col mt-16">
            <h2
              className="
    text-4xl sm:text-5xl lg:text-6xl
    font-bold tracking-widest
    bg-gradient-to-b from-sky-400 to-emerald-400
    bg-clip-text text-transparent
    dark:text-white
  "
            >
              W E L C O M E
            </h2>

            <div className="relative mt-6 pl-0 lg:pl-6">
              <span className="hidden lg:block absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-400 to-emerald-400" />

              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I’m{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                  Ega Gunawan Novaldi
                </span>
                , a Full Stack Developer with a passion for building responsive,
                efficient, and scalable web applications. I specialize in modern
                technologies such as Vue.js, React.js, Laravel, and Node.js to
                transform ideas into real digital products. Currently, I’m
                expanding my expertise in Python and Go to explore
                high-performance backend solutions.
              </p>

              <a href="../CV/cv.pdf" download>
                <button
                  className="
                    flex items-center justify-center gap-2
                    border border-black dark:border-white font-semibold
                    w-60 h-12
                    rounded-sm my-4 hover:bg-gray-400 hover:text-white
                    dark:hover:bg-white dark:hover:text-black
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

          <div className="sm:flex flex-col px-16 hidden">
            <h1 className="text-2xl font-semibold mb-4">Projects</h1>
            <div className="relative p-4">
              <span className="absolute left-0 top-0 w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-tl-md" />

              <span className="absolute left-0 top-0 h-20 w-1 bg-gradient-to-b from-pink-400 to-yellow-400 rounded-tl-md" />

              <ul className="text-md">
                <a href="https://github.com/Egaxyz/POS-Laravel" target="blank">
                  <li className="hover:underline italic hover:cursor-pointer pb-1">
                    Point Of Sale
                  </li>
                </a>
                <a href="https://github.com/Egaxyz/erp" target="blank">
                  <li className="hover:underline italic hover:cursor-pointer py-1">
                    ERP
                  </li>
                </a>
                <li className="hover:underline italic hover:cursor-pointer py-1">
                  Edutama
                </li>
                <a
                  href="https://landing-page-resto-omega.vercel.app/"
                  target="blank"
                >
                  <li className="hover:underline italic hover:cursor-pointer py-1">
                    Steak House
                  </li>
                </a>
                <a href="https://github.com/Egaxyz/gudang-barang">
                  <li className="hover:underline italic hover:cursor-pointer py-1">
                    Inventory Management System
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
