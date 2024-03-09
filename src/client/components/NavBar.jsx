import React from "react";
import logo from "../img/logo.png";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <a href="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </a>
      <div className="navbar-links">
        <a href="/">Portfolio</a>
        <a href="/about">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
