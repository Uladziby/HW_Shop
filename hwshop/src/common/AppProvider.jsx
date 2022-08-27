import { createContext, useState } from "react";
import React  from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [myCart, setMyCart] = useState({ items: 0, total: 0 });
  const setCart = (quantity, price) => {
    const totalItems = myCart.items + quantity;
    const totalPrice = myCart.total + quantity * price;
    setMyCart({
      items: totalItems,
      total: totalPrice,
    });
  };

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const setCurrUser = (name, password) => {
    setUser({
      name: name,
      password: password,
    });
  };

  return (
    <AppContext.Provider value={{ myCart, setCart, user, setCurrUser }}>
      {children}
    </AppContext.Provider>
  );
};
