import Header from "./Header";
import Projects from "./Projects";
import Particle from "./Particle";

export default function MainContent() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
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
          marginTop: "15%",
        }}
      >
        <Header />
      </div>
    </div>
  );
}
