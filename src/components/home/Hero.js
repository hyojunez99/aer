import HeroImg from "../../assets/images/hero-img.png";
import "./Hero.scss";

import { useRef } from "react";
import { Link } from "react-router-dom";
import useGsap from "../../utils/hooks/useGsap";

import { heroFade, heroParallax, scaleImg } from "../../utils/Gsap";

const Hero = () => {
  const ref = useRef(null);

  useGsap(() => {
    heroFade(".hero-text h2 span");
    heroFade(".hero-sub span");
    heroFade(".hero-cta");

    scaleImg(".hero-img img");
    heroParallax(".hero-img img");
  }, ref);

  return (
    <section id="hero" ref={ref}>
      <div className="hero-img">
        <img className="scale-img" src={HeroImg} alt="AER fashion collection" />
      </div>

      <div className="hero-text">
        <h2>
          <span>Modern</span>
        </h2>
        <h2>
          <span>Minimal</span>
        </h2>
        <h2>
          <span>AER</span>
        </h2>

        <p className="hero-sub">
          <span>AER COLLECTION 2026</span>
          <span>Minimal Knit Wear Brand</span>
        </p>

        <Link to="/collection" className="hero-cta">
          View Collection
        </Link>
      </div>

      <div className="scroll-down">
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
