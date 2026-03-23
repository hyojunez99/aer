import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImg from "../../assets/images/hero-img.png";
import "./Hero.scss";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 👉 첫 등장 애니메이션
      gsap.from(textRef.current.children, {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(imgRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      // 👉 🔥 스크롤 애니메이션
      gsap.to(imgRef.current, {
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        y: -150,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-img">
        <img ref={imgRef} src={HeroImg} alt="fashion" />
      </div>

      <div className="hero-text" ref={textRef}>
        <h2>Modern</h2>
        <h2>Minimal</h2>
        <h2>AER</h2>
      </div>
    </section>
  );
};

export default Hero;