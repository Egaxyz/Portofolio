import About from "./About";
import Projects from "./Projects";

export default function MainContent() {
  return (
    <main className="p-8 space-y-12">
      <About />
      <Projects />
    </main>
  );
}
