import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Particle from "./Particle";
import Footer from "./Footer";

export default function MainContent() {
  return (
    <div style={{ width: "100%", minHeight: "300", position: "relative" }}>
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
          particleCount={900}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginLeft: "8%",
          marginTop: "180px",
        }}
      >
        <Header />
      </div>
      <div style={{ marginTop: "250px", marginBottom: "100px" }}>
        <About />
      </div>
      <div
        style={{ marginBottom: "100px", marginLeft: "6%", marginRight: "6%" }}
      >
        <Projects />
      </div>
      <div style={{ marginTop: "auto", marginLeft: "70%" }}>
        <Footer />
      </div>
    </div>
  );
}
