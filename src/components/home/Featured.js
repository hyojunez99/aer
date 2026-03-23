import { Link } from "react-router-dom";
import data from "../../assets/data/Featured.json";
import "./Featured.scss";

const Featured = () => {
  const featuredItems = data.filter((item) => item.featured);

  return (
    <section id="featured">
      <div className="featured-hero">
        <img src={require("../../assets/images/hero.png")} alt="hero" />
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
        <img src={require("../../assets/images/lookbook.png")} alt="look" />
      </div>

      <div className="featured-cta">
        <Link to="/collection">View Collection</Link>
      </div>
    </section>
  );
};

export default Featured;
