import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>Library Management</h2>
        </header>
        <Home />
        <footer>
          <small>
            Wish you luck,{" "}
            <a
              target="_blank"
              href="https://github.com/Satyam7Jha/DevRev---Round-1-Assessment"
            >
              Satyam Jha
            </a>
            .
          </small>
        </footer>
      </div>
    );
  }
}

export default App;
