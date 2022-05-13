import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [lista, setLista] = useState([]);


  function inputUsuario(event) {
    setInput(event.target.value);
  }

  function addLista() {
    setLista((prevItens) => {
      return [...prevItens, input];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Line-Up</h1>
      </div>
      <div className="form">
        <input onChange={inputUsuario} value={input} type="text" />
        <button onClick={addLista}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {lista.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
