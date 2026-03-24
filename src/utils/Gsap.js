import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (targets) => {
  gsap.fromTo(
    targets,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: targets,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    },
  );
};

export const scaleImg = (targets) => {
  gsap.fromTo(
    targets,
    { scale: 1.08 },
    {
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: targets,
        start: "top 80%",
      },
    },
  );
};

export const staggerItem = (targets) => {
  gsap.fromTo(
    targets,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: targets,
        start: "top 85%",
      },
    },
  );
};

export const pageEnter = (targets) => {
  gsap.fromTo(
    targets,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    },
  );
};

export const heroFade = (targets) => {
  gsap.to(targets, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
    force3D: true,
  });
};

export const heroParallax = (target) => {
  gsap.to(target, {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
};
