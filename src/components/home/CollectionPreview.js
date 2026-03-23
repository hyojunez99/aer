import { useRef } from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data/CollectionData.json";
import "./CollectionPreview.scss";

const CollectionPreview = () => {
  const itemsRef = useRef([]);

  return (
    <section id="collection">
      <div className="collection-inner">
        <div className="collection-header">
          <h2>Collection</h2>
          <Link to="/collection">View All</Link>
        </div>

        <div className="collection-list">
          {data.slice(0, 6).map((item, i) => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <div
                className="collection-item"
                ref={(el) => (itemsRef.current[i] = el)}
              >
                {/* 모델 이미지 */}
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
      </div>
    </section>
  );
};

export default CollectionPreview;
