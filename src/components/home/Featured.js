import { Link } from "react-router-dom";
import { useRef } from "react";
import data from "../../assets/data/Featured.json";
import "./Featured.scss";

import useGsap from "../../utils/hooks/useGsap";
import { fadeUp, scaleImg, staggerItem } from "../../utils/Gsap";

const Featured = () => {
  const ref = useRef(null);
  const featuredItems = data.filter((item) => item.featured);

  useGsap(() => {
    const el = ref.current;

    // 🔥 hero 텍스트
    fadeUp(el.querySelectorAll(".hero-text > *"));

    // 🔥 상품 리스트
    staggerItem(el.querySelectorAll(".featured-item"));

    // 🔥 이미지
    scaleImg(el.querySelectorAll(".scale-img"));

    // 🔥 CTA
    fadeUp(el.querySelectorAll(".featured-cta"));
  });

  return (
    <section id="featured" ref={ref}>
      <div className="featured-hero">
        <img
          className="scale-img"
          src={require("../../assets/images/hero.png")}
          alt="hero"
        />

        <div className="hero-text">
          <h2>2026 SS COLLECTION</h2>
          <p>Essential Minimal Wear</p>
        </div>
      </div>

      <div className="featured-products">
        {featuredItems.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <div className="featured-item">
              <img
                className="scale-img"
                src={require(`../../assets/images/${item.image[0]}`)}
                alt={item.name}
              />
              <div className="item-info">
                <p>{item.name}</p>
                <span>₩{item.price.toLocaleString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="featured-look">
        <img
          className="scale-img"
          src={require("../../assets/images/lookbook.png")}
          alt="look"
        />
      </div>

      <div className="featured-cta">
        <Link to="/collection">View Collection</Link>
      </div>
    </section>
  );
};

export default Featured;
