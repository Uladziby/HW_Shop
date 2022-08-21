import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [myCart, setMyCart] = useState({ items: 0, total: 0 });
  const setCart = (quantity, price) => {
      const totalItems = myCart.items+quantity;
      const totalPrice = myCart.total+quantity*price;
    setMyCart({
        items : totalItems,
        total : totalPrice,
    });
  };

  return (
  <CartContext.Provider value={{ myCart, setCart }}>
    {children}
   </CartContext.Provider>
   );
};
