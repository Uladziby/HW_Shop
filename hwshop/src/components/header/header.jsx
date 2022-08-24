import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../common/AppProvider";
import { routes } from "../common/constants";
import styles from "./styles.module.css";

const HeaderComponent = ({ setShowModal }) => {
  const appContext = useContext(AppContext);

  const [myCart, setMyCart] = useState({ items: 0, total: 0 });

  const showModal = () => {
    appContext.user.name ? appContext.setCurrUser("", "") : setShowModal(true);
  };

  useEffect(() => {
    setMyCart(appContext.myCart);
  }, [appContext]);

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
          style={{ visibility: appContext.user.name ? "visible" : "hidden" }}
          className={styles.basket}
        >{`items: ${myCart.items} total: ${myCart.total}$`}</div>
        <button type="button" className={styles.btn_chat} onClick={showModal}>
          {appContext.user.name ? "Logout" : "Login"}
        </button>
      </div>
      <div className={styles.header__bottom}></div>
      <div className={styles.header__logo}></div>
    </header>
  );
};

export default HeaderComponent;
