import { useEffect } from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../common/CartProvider";
import { routes } from "../common/constants";
import styles from "./styles.module.css";

const HeaderComponent = () => {
  const cartContext = useContext(CartContext);
  
  let activeStyle = {
    textDecoration: "underline",
    color: "#66999b",
  };

  const [myCart, setMyCart] = useState({ items: 0, total: 0 });
  useEffect(() => {
    setMyCart(cartContext.myCart);
  }, [cartContext]);

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.navlinks}>
          <NavLink
            className={styles.navlink}
            to={routes.Main}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Main
          </NavLink>
          <NavLink
            className={styles.navlink}
            to={routes.About}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About Us
          </NavLink>
        </div>
        <div className={styles.basket}>{`items${myCart.items} total:${myCart.total}$`}</div>
        <button type="button" className={styles.btn_chat}>
          Login
        </button>
      </div>
      <div className={styles.header__bottom}></div>
      <div className={styles.header__logo}></div>
    </header>
  );
};

export default HeaderComponent;
