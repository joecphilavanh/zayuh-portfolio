import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  const location = useLocation();

  const scrollToPortfolio = () => {
    if (location.pathname === "/") {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav>
      <Link to="/" className="navbar-logo">
        <img src="/img/logo.png" alt="Logo" />
      </Link>
      <div className="navbar-links">
        <a
          href="#portfolio"
          onClick={scrollToPortfolio}
          className="navbar-links"
        >
          Portfolio
        </a>
        <Link to="/contact" className="navbar-link">
          {" "}
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
