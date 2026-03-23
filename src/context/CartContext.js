import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 장바구니 추가
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((el) => el.id === item.id);

      if (exist) {
        return prev.map((el) =>
          el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // 삭제
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((el) => el.id !== id));
  };

  // 수량 변경
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((el) => (el.id === id ? { ...el, quantity: qty } : el)),
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
