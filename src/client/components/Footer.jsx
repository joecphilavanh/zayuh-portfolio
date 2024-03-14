import React from "react";
import "../style/Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="social-links">
      <a
        href="https://www.youtube.com/@hellakawaii193"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-link"
      >
        <img src="/img/youtube.png" alt="YouTube" className="youtube-icon" />
      </a>
      <a
        href="https://www.instagram.com/zayuhh/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <img
          src="/img/instagram.png"
          alt="Instagram"
          className="instagram-icon"
        />
      </a>
      <a
        href="https://twitter.com/Zayuhh"
        target="_blank"
        rel="noopener noreferrer"
        className="x-link"
      >
        <img src="/img/x.png" alt="x" className="x-icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
