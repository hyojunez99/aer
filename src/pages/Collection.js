import { Link } from "react-router-dom";
import data from "../assets/data/CollectionData.json";
import "./Collection.scss";

const Collection = () => {
  return (
    <section id="collection-page">
      <div className="collection-inner">
        <h2>Collection</h2>

        <div className="collection-list">
          {data.map((item) => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <div className="collection-item">
                <img
                  src={require(`../assets/images/${item.image[0]}`)}
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

export default Collection;
