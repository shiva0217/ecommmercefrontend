import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
// import Home from "./components/Home"
import Background from './data/images/background.jpg';
import './css/background.css';
class App extends Component {
  state = {}
 
  render() {
    return (
    <div  className="thisIsMyImage"  >
        {/* < img src={Background} alt="thisIsMyImage"/> */}
        
         <Navbar  />
         
        <main className="container">
        
          <Products />
        </main>
        
      </div>
    );
  }
}

export default App