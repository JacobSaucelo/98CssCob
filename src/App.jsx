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

      <ul className="tree-view">
        <li>We can put</li>
        <li>
          <strong style={{ color: "purple" }}>✨ emoji😭🔥 ✨</strong>
        </li>
        <li>We want in here</li>
      </ul>

      <div className="window" style={{ width: "320px" }}>
        <div className="title-bar">
          <div className="title-bar-text">A Window With A Status Bar</div>
        </div>
        <div className="window-body">
          <p> There are just so many possibilities:</p>
          <ul>
            <li>A Task Manager</li>
            <li>A Notepad</li>
            <li>Or even a File Explorer!</li>
          </ul>
        </div>
        <div className="status-bar">
          <p className="status-bar-field">Press F1 for help</p>
          <p className="status-bar-field">Slide 1</p>
          <p className="status-bar-field">CPU Usage: 14%</p>
        </div>
      </div>

      <div className="field-row-stacked" style={{ width: "200px" }}>
        <label htmlFor="text22">Email</label>
        <input id="text22" type="email" readOnly value="admin@contoso.com" />
      </div>
      <div className="field-row-stacked" style={{ width: "200px" }}>
        <label htmlFor="text23">Password</label>
        <input id="text23" type="password" readOnly value="hunter2" />
      </div>
      <div className="field-row-stacked" style={{ width: "200px" }}>
        <label htmlFor="text24">Favorite Number</label>
        <input id="text24" type="number" value="100" readOnly />
      </div>
      <CompTabs />
    </section>
  );
}

export default App;
