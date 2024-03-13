import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <section
        className="hero-section"
        style={{ backgroundImage: `url('/img/zayuh/profilePic.png')` }}
      >
        <div className="hero-content">
          <div className="text-box">
            <h1>ZAYUH</h1>
            <h1>PHILAVANH</h1>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-image">
          <img src="/img/zayuh/aboutPic.jpg" alt="About Me" />
        </div>
        <div className="about-text">
          <h2>ABOUT</h2>
          <p>
            The moment I picked up a camera, it clicked—I was meant for this.
            Photography became my way to chase the real, the now, and the
            once-in-a-lifetime. It’s about snapping the unfiltered beauty of the
            streets, the candid laughs, and the silent stories. With each photo,
            I bring my perspective, blending urban vibes with moments that don't
            last. It's not just about capturing images; it's about creating a
            vibe, a memory, and a story that sticks. This is where I turn the
            ordinary into iconic, one shot at a time
          </p>
        </div>
      </section>
      <div className="portfolio" id="portfolio">
        <div
          className="portfolio-item"
          onClick={() => navigate(`/gallery/35mm`)}
        >
          <div className="portfolio-item-overlay">
            <h3>35mm</h3>
          </div>
          <img src="/img/35mm/1.jpg" alt="35mm" />
        </div>
        <div
          className="portfolio-item"
          onClick={() => navigate(`/gallery/2021`)}
        >
          <div className="portfolio-item-overlay">
            <h3>2021</h3>
          </div>
          <img src="/img/2021/9.jpg" alt="2021" />
        </div>
        <div
          className="portfolio-item"
          onClick={() => navigate(`/gallery/studio`)}
        >
          <div className="portfolio-item-overlay">
            <h3>Studio</h3>
          </div>
          <img src="/img/studio/57.jpg" alt="Studio" />
        </div>
        <div
          className="portfolio-item"
          onClick={() => navigate(`/gallery/auditions`)}
        >
          <div className="portfolio-item-overlay">
            <h3>Auditions</h3>
          </div>
          <img src="/img/auditions/18.jpg" alt="Auditions" />
        </div>
        <div
          className="portfolio-item"
          onClick={() => navigate(`/gallery/garden`)}
        >
          <div className="portfolio-item-overlay">
            <h3>Garden of Eden</h3>
          </div>
          <img src="/img/garden/25.jpg" alt="Garden of Eden" />
        </div>
        <div
          className="portfolio-item"
          onClick={() => navigate(`/gallery/headshots`)}
        >
          <div className="portfolio-item-overlay">
            <h3>Headshots</h3>
          </div>
          <img src="/img/headshots/33.jpg" alt="Headshots" />
        </div>
        <div
          className="portfolio-item"
          onClick={() => navigate(`/gallery/hellakawaii`)}
        >
          <div className="portfolio-item-overlay">
            <h3>Hella Kawaii</h3>
          </div>
          <img src="/img/hellakawaii/41.jpg" alt="Hella Kawaii" />
        </div>
        <div
          className="portfolio-item"
          onClick={() => navigate(`/gallery/products`)}
        >
          <div className="portfolio-item-overlay">
            <h3>Products</h3>
          </div>
          <img src="/img/products/49.jpg" alt="Products" />
        </div>
      </div>
      <div className="hella-image">
        <img src="/img/Hella.png" alt="hella banner" />
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
      <div className="lastImg">
        <img src="/img/zayuh/lastImg.jpg" alt="last image" />
      </div>
    </div>
  );
};

export default Home;
