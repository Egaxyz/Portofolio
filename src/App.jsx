import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div
      className={`
    min-h-screen w-screen flex overflow-hidden
    ${theme === "dark" ? "bg-[#0d1425] text-[#E2E8F0]" : "bg-white text-black"}
  `}
    >
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        title={theme === "dark" ? "Light mode" : "Dark mode"}
        className="
          absolute 
          right-10 
          top-1/2 
          -translate-y-1/2 
          bg-gray-700 
          text-white 
          p-3 
          rounded-lg 
          hover:bg-gray-600 
          transition
          flex items-center justify-center
        "
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </button>
      <div className="w-24 flex items-start justify-center">
        <Contact />
      </div>

      <div className="flex-1 flex items-start">
        <MainContent />
      </div>

      <div className="w-50 flex items-start justify-center">
        <Navbar />
      </div>
    </div>
  );
}
