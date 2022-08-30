/** @format */

import { NavLink } from "react-router-dom";
import { routes } from "../../common/constants";
import styles from "./styles.module.css";
import React from "react";
import icon_cart from "../../assets/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { showModalCart } from "../../redux/reducers/cartSlice";
import { logout } from "../../redux/reducers/userSlice";
import { notifyLogin, showModalLogin } from "../../redux/reducers/mainSlice";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { totalPrice, amountItems } = useSelector((state) => state.cart);
  const { name } = useSelector((state) => state.user);

  const showModal = () => {
    name ? dispatch(logout()) : dispatch(showModalLogin(true));
  };

  const handlerShowCartModal = () => {
    name ? dispatch(showModalCart()) : dispatch(notifyLogin(true));
  };

  let activeStyle = {
    background: "#66999b",
    color: "white",
    minWidth: "80px",
    padding: "0 2rem",
    transition: "all 1s easy",
  };

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
        <button className={styles.btn_cart} onClick={handlerShowCartModal}>
          <img src={icon_cart} alt="icon_cart" />
        </button>
        <div style={{ visibility: name ? "visible" : "hidden" }} className={styles.basket}>
          {`items: ${amountItems} total: ${totalPrice.toFixed(2)}$`}
        </div>
        <button type="button" className={styles.btn_chat} onClick={showModal}>
          {name ? "Logout" : "Login"}
        </button>
      </div>
      <div className={styles.header__bottom}></div>
      <div className={styles.header__logo}></div>
    </header>
  );
};

export default HeaderComponent;
