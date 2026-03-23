import { useRef } from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data/CollectionData.json";
import "./CollectionPreview.scss";

import useGsap from "../../utils/hooks/useGsap";
import { staggerItem } from "../../utils/Gsap";

const CollectionPreview = () => {
  const ref = useRef(null);

  useGsap(() => {
    const el = ref.current;
    staggerItem(el.querySelectorAll(".collection-item"));
  });

  return (
    <section id="collection" ref={ref}>
      <div className="collection-inner">
        <div className="collection-header">
          <h2>Collection</h2>
          <Link to="/collection">View All</Link>
        </div>

        <div className="collection-list">
          {data.slice(0, 6).map((item) => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <div className="collection-item">
                <img
                  src={require(`../../assets/images/${item.image[0]}`)}
                  alt=""
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
