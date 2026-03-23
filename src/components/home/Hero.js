import HeroImg from "../../assets/images/hero-img.png";
import "./Hero.scss";

import { useRef } from "react";
import useGsap from '../../utils/hooks/useGsap';
import { heroFade, scaleImg } from "../../utils/Gsap";

const Hero = () => {
  const ref = useRef(null);

  useGsap(() => {
    heroFade(".hero-text h2");
    scaleImg(".hero-img img");
  });

  return (
    <section id="hero" ref={ref}>
      <div className="hero-img">
        <img className="scale-img" src={HeroImg} alt="fashion" />
      </div>

      <div className="hero-text">
        <h2>Modern</h2>
        <h2>Minimal</h2>
        <h2>AER</h2>
      </div>
    </section>
  );
};

export default Hero;
