import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/Home"
import Background from './data/images/background.jpg';
import './css/background.css';
import {Redirect,Switch, Route } from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/register";
import Orders from "./components/orders";
import ProductDetails from './components/productDetails';
import pageNotFound from './components/notFound';
class App extends Component {
  state = {}
 
  render() {
    return (
  
      <div>
         <Navbar  />
         
        <div className="container">
        <Switch>
           <Route path="/products" component={Products} />
           <Route path="/login" component={Login} />
           <Route path="/register" component={Register} />
           <Route path="/orders" component={Orders} />
           <Route path="/products:_id" component={ProductDetails} />
           <Route path="/not-found" component={pageNotFound} />
           <Route path="/" exact component={Home} />
           <Redirect to="/not-found"/>

         </Switch>
        </div>
        </div>  
    )
  }
}

export default App