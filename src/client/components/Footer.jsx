import React from "react";
import "../style/Footer.css";
import youtubeIcon from "../img/youtube.png";
import instagramIcon from "../img/instagram.png";
import xIcon from "../img/x.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="text-container">
          <p>
            "Creativity is seeing what everyone else has seen, and thinking what
            no one else has thought." - Albert Einstein
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://www.youtube.com/@hellakawaii193"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            <img src={youtubeIcon} alt="YouTube" className="youtube-icon" />
          </a>
          <a
            href="https://www.instagram.com/zayuhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <img
              src={instagramIcon}
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
            <img src={xIcon} alt="x" className="x-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
