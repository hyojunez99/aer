import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <div className="about-inner">
        {/* 🔥 HERO */}
        <div className="about-hero">
          <h2>AER</h2>
          <p>Essential Minimal Wear</p>
        </div>

        <div className="about-text">
          <p>
            AER is a contemporary fashion brand focused on minimal design and
            refined silhouettes. We believe in simplicity, quality, and timeless
            aesthetics. Each piece is crafted to elevate everyday wear.
          </p>
        </div>

        <div className="about-image">
          <img src={require("../assets/images/about.png")} alt="about" />
        </div>

        <div className="about-values">
          <span>Minimal</span>
          <span>Timeless</span>
          <span>Essential</span>
          <span>Crafted</span>
        </div>

        <div className="about-cta">
          <Link to="/collection">Explore Collection</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
