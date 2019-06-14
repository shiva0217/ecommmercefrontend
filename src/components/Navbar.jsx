
import React from "react";
// import {BrowserRouter as Router} from "react-router-dom";
// import Route from "react-router-dom/Route"
// import Home from "./Home";
// import Products from "./Products";
import Clock from 'react-live-clock';
import "../css/nav.css"

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <a className="navbar-brand" href="http://localhost:3000" float = "right">
        <img src={require("../data/images/myshop.jpg")} width={60} alt="" />myshop
        <p >
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe'} />
        </p> 
        </a>
      <div class="nav nav-tabs" float = "left">
        <a class="navbar-brand" href="http://localhost:3000" >Home</a>
        <a class="navbar-brand" href="./products">Products</a>
        <a class="navbar-brand" href="./categories">Categories</a>
        <a class="navbar-brand" href="./AboutUs">About Us</a>
      </div>
        
        
      </nav>
      
    </>
  );
};
export default NavBar;