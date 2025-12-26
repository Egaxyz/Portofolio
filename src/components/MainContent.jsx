import Projects from "./Projects";

export default function MainContent() {
  return (
    <div style={{ width: "100%", minHeight: "300", position: "relative" }}>
      <div
        style={{ marginBottom: "100px", marginLeft: "6%", marginRight: "6%" }}
      >
        <Projects />
      </div>
    </div>
  );
}
