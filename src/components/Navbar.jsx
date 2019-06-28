
import React from "react";
import { Link } from "react-router-dom";
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
        <img src={require("../data/images/myshop.jpg")} width={60} alt="" />Myshop
        <p >
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe'} />
        </p> 
        </a>
        <ul>
     
       <Link to="/">Home</Link>    
       <Link to="/products">Products</Link>
       <Link to="login">Login</Link>
       <Link to="/Register">Register</Link>
       <Link to="/orders">Orders</Link>
     
   </ul>

        
        
      </nav>
      
    </>
  );
};
export default NavBar;