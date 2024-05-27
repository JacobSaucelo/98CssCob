import CompTabs from "./Components/Comp.Tabs";

function App() {
  return (
    <section
      style={{
        maxWidth: "900px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        padding: "1rem",
      }}
    >
      <button>testing btn</button>

      <div className="window" style={{ width: "300px" }}>
        <div className="title-bar">
          <div className="title-bar-text">Random old window</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa
            nesciunt aspernatur saepe totam odio porro ab, ullam id? Totam.
          </p>
          {/* <p>There&apos;s so much room for activities!</p> */}
        </div>
      </div>

      <CompTabs />
    </section>
  );
}

export default App;
