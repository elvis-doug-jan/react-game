import React from "react";
import "./App.css";
import { Buttom } from "./components/Buttons/button.component";
import { Cards } from "./components/Cards/card.component";
import { Input } from "./components/Input/input.component"
import { Modal } from "./components/Modal/modal.component"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttom />
        <Cards />
        <Input />
        <Modal />
      </header>
    </div>
  );
}

export default App;
