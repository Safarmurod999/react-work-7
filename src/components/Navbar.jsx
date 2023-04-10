import React from "react";
import { useGlobalContext } from "../context";
import "./Navbar.scss";
function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="container">
        <h3 className="navbar-title">UseReducer</h3>
        <p className="navbar-cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <sup>{amount}</sup>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
