import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./containers/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar Name="" />
      <Login />
    </div>
  );
}

export default App;
