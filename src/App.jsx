import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="bg-[#1e1e2f] text-gray-300 min-h-screen font-sans flex">
      <div className="bg-[#1e1e2f]">
        <Sidebar />
      </div>

      <div className="flex-1 h-screen overflow-y-auto">
        <MainContent />
      </div>
    </div>
  );
}
