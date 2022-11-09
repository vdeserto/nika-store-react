import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./routes";
import "./styles/base.css";

function App() {
  return (
      <main className="App">
            <Routes />
      </main>
    // <main>
    // <Navbar/>
    // </main>
  );
}

export default App;
