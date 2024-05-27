import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
    </>
  );
}

export default App;
