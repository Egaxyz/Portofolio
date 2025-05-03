import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useState } from "react";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#1e1e2f] text-gray-300 min-h-screen font-sans flex">
      <div
        className={`
          fixed inset-y-0 left-0 z-50 bg-[#1e1e2f] transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:block
        `}
      >
        <Sidebar />
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="flex-1 h-screen overflow-y-auto relative">
        <button
          className="fixed top-4 left-4 z-50 p-2 text-white bg-gray-700 rounded md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        <MainContent />
      </div>
    </div>
  );
}
