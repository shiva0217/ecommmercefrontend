
import React from "react";

const NavBar = ({ totalCount }) => {
  return (
    <>
      <nav className="navbar  navbar-expand-md navbar-dark bg-dark ">
        <a className="navbar-brand" href="http://localhost:3000">
          <img src={require("../data/images/myshop.jpg")} width={60} alt="" />
          MyShop
        </a>
      </nav>
    </>
  );
};
export default NavBar;