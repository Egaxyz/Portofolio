import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";

export default function Sidebar() {
  return (
    <div className="bg-[#2a2a40] p-8 flex flex-col md:sticky top-0 h-full">
      <Header />
      <List />
      <Contact />
      <Footer />
    </div>
  );
}
