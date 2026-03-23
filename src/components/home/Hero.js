import HeroImg from "../../assets/images/hero-img.png";
import "./Hero.scss";

import { useRef } from "react";
import useGsap from "../../utils/hooks/useGsap";
import { heroFade, heroParallax, scaleImg } from "../../utils/Gsap";

const Hero = () => {
  const ref = useRef(null);

  useGsap(() => {
    heroFade(".hero-text h2 span");
    scaleImg(".hero-img img");
    heroParallax(".hero-img img");
  });

  return (
    <section id="hero" ref={ref}>
      <div className="hero-img">
        <img className="scale-img" src={HeroImg} alt="fashion" />
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
      </div>
      <div className="scroll-down">
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
