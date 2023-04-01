import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const onInputChange = (e) => {
    setName(e.target.value);
  };

  const onButtonClick = () => {
    document.getElementById("text").textContent = `Hello my name is ${name} and I study at Newton School`;
  };

  return (
    <div id="main">
      <input id="input" onChange={onInputChange}></input>
      <button id="button" onClick={onButtonClick}>
        Click
      </button>
      <p id="text"> </p>
    </div>
  );
};

export default App;
