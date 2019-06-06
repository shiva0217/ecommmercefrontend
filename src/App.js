import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

class App extends Component {
  state = {}
     
  render() {
    return (
      <div>
        <Navbar  />
        <main className="container">
          <Products />
        </main>
      </div>
    );
  }
}

export default App