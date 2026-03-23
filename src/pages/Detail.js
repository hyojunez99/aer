import { useState, useContext } from "react";
import data from "../assets/data/CollectionData.json";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import { CartContext } from "../context/CartContext";

const Detail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); 

  const item = data.find((el) => el.id === Number(id));

  const [mainImg, setMainImg] = useState(item ? item.image[0] : null);

  if (!item) return <div>Not Found</div>;

  return (
    <section id="detail">
      <div className="detail-inner">
        <div className="detail-left">
          <div className="detail-img">
            <img src={require(`../assets/images/${mainImg}`)} alt={item.name} />
          </div>

          <div className="detail-thumbs">
            {item.image.map((img, i) => (
              <img
                key={i}
                src={require(`../assets/images/${img}`)}
                alt=""
                className={mainImg === img ? "active" : ""}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>

        <div className="detail-info">
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
          <p className="price">₩{item.price.toLocaleString()}</p>

          <button
            onClick={() => {
              addToCart(item);
              alert("장바구니에 담겼습니다");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Detail;
