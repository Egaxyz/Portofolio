import About from "./About";
import Projects from "./Projects";

export default function MainContent() {
  return (
    <main className="p-4 sm:p-6 md:p-8 space-y-12 max-w-screen-md w-full mx-auto">
      <About />
      <Projects />
    </main>
  );
}
