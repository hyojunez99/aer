import { Link } from "react-router-dom";
import { useRef } from "react";
import data from "../../assets/data/Featured.json";
import "./Featured.scss";

import useGsap from "../../utils/hooks/useGsap";
import { fadeUp, scaleImg, staggerItem, heroParallax } from "../../utils/Gsap";

const Featured = () => {
  const ref = useRef(null);

  // 임시 대표 상품 3개
  const featuredItems = data.slice(0, 3);

  useGsap(
    () => {
      const el = ref.current;
      if (!el) return;

      // Hero fade + parallax
      const heroTexts = el.querySelectorAll(".hero-text > *");
      if (heroTexts.length) fadeUp(heroTexts);

      const heroImg = el.querySelector(".featured-hero img.scale-img");
      if (heroImg) heroParallax(heroImg);

      // Featured Products stagger + scale
      const items = el.querySelectorAll(".featured-item");
      if (items.length) {
        staggerItem(items);

        const itemImgs = el.querySelectorAll(".featured-item img.scale-img");
        if (itemImgs.length) scaleImg(itemImgs);
      }

      // Lookbook fade + 텍스트
      const lookImgs = el.querySelectorAll(".featured-look img.scale-img");
      if (lookImgs.length) fadeUp(lookImgs);

      const lookText = el.querySelectorAll(".look-text");
      if (lookText.length) fadeUp(lookText);

      // CTA fade
      const cta = el.querySelectorAll(".featured-cta a");
      if (cta.length) fadeUp(cta);
    },
    ref, // scopeRef
    [], // deps
  );

  return (
    <section id="featured" ref={ref}>
      {/* Hero Section */}
      <div className="featured-hero">
        <img
          className="scale-img"
          src={require("../../assets/images/hero.png")}
          alt="hero"
        />
        <div className="hero-text">
          <h2>2026 SS COLLECTION</h2>
          <p>Essential Minimal Wear</p>
          <Link to="/collection" className="hero-cta">
            View Collection
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-products">
        {featuredItems.map((item, index) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <div className={`featured-item size-${index % 3}`}>
              <div className="img-wrapper">
                <img
                  className="scale-img"
                  src={require(`../../assets/images/${item.image[0]}`)}
                  alt={item.name}
                />
                <div className="item-overlay"></div>
              </div>
              <div className="item-info">
                <p>{item.name}</p>
                <span>₩{item.price.toLocaleString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Lookbook Section */}
      <div className="featured-look">
        <img
          className="scale-img"
          src={require("../../assets/images/lookbook.png")}
          alt="look"
        />
        <div className="look-text">Explore Lookbook</div>
      </div>

      {/* CTA Button */}
      <div className="featured-cta">
        <Link to="/collection">View Collection</Link>
      </div>
    </section>
  );
};

export default Featured;
