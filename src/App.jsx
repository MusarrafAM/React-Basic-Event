import { useState } from "react";

function App() {
  let [headingText, setHeading] = useState("Hello");
  let [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeading("Clicked");
  }

  function handleMouseover() {
    setMouseOver(true);
  }

  function handleMouseout() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
