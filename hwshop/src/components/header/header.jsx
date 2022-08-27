import { useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../common/AppProvider";
import { routes } from "../../common/constants";
import styles from "./styles.module.css";
import React  from 'react';

const HeaderComponent = ({ setShowModal }) => {
  const {myCart, user, setCurrUser} = useContext(AppContext);

  const showModal = () => {
    user.name ? setCurrUser("", "") : setShowModal(true);
  };

  let activeStyle = {
    textDecoration: "underline",
    color: "#66999b",
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

        <div
          style={{ visibility: user.name ? "visible" : "hidden" }}
          className={styles.basket}
        >{`items: ${myCart.items} total: ${myCart.total}$`}</div>
        <button type="button" className={styles.btn_chat} onClick={showModal}>
          {user.name ? "Logout" : "Login"}
        </button>
      </div>
      <div className={styles.header__bottom}></div>
      <div className={styles.header__logo}></div>
    </header>
  );
};

export default HeaderComponent;
