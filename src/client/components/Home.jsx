import React from "react";
import "../style/Home.css";
import profilePic from "../img/zayuh/profilePic.png";
import aboutPic from "../img/zayuh/aboutPic.jpg";
import Hella from "../img/Hella.png";

const Home = () => {
  return (
    <div className="container">
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${profilePic})` }}
      >
        <div className="hero-content">
          <div className="text-box">
            <h1>ZAYUH</h1>
            <h1>PHILAVANH</h1>
            {/* <h2>PHOTOGRAPHER</h2> */}
            {/* <button className="btn">Get in Touch</button> */}
          </div>
        </div>
      </section>
      <h2 className="about-heading">About</h2>

      <section className="about-section">
        <div className="about-image">
          <img src={aboutPic} alt="About Me" />
        </div>
        <div className="about-text">
          <h2>Zayuh</h2>
          <p>
            Ever since I picked up a camera, I knew I found my calling.
            Capturing the world's beauty and fleeting moments became my passion.
            Photography has allowed me to express my creativity, meet incredible
            people, and tell stories without words. From the golden hour's soft
            light to the raw emotions of life's milestones, each photo I take is
            a piece of my journey. Becoming a photographer has truly been a
            dream realized.
          </p>
        </div>
      </section>
      <div className="hella-image">
        <img src={Hella} alt="hella banner" />
      </div>
      <div className="video-container">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/scHM2uKc-bY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
