import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import About from "./components/Skill";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="min-h-screen w-screen flex bg-white text-black dark:bg-[#0d1425] dark:text-[#E2E8F0] transition-colors duration-300">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="
          fixed 
          right-5 
          top-1/2 
          -translate-y-1/2
          bg-gray-700 
          text-white 
          p-3 
          rounded-lg 
          hover:bg-gray-600
          transition
          z-50
        "
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <div className="w-20 p-5 fixed ">
        <Contact />
      </div>

      <div className="flex-1 flex flex-col items-center ">
        <div className="flex-1 flex">
          <Header />
        </div>
        <div className="flex-1 flex mt-3">
          <About />
        </div>

        <div className="flex-1 flex items-start ml-10">
          <MainContent />
        </div>
        <div className="flex-1 flex items-start">
          <Footer />
        </div>
      </div>

      <div className="w-50 flex items-start justify-center">
        <Navbar />
      </div>
    </div>
  );
}

function SunIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}
