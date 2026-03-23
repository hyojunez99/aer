import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <section id="cart" className="empty">
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>

          <Link to="/collection" className="go-shop">
            Explore Collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="cart">
      <div className="cart-inner">
        <h2>Cart</h2>

        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={require(`../assets/images/${item.image[0]}`)}
                alt={item.name}
              />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>₩{item.price.toLocaleString()}</p>

                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                />

                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <h3>Total: ₩{totalPrice.toLocaleString()}</h3>
        </div>
      </div>
    </section>
  );
};

export default Cart;
