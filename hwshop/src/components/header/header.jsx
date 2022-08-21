import { NavLink } from "react-router-dom";
import { routes } from "../common/constants";
import styles from "./styles.module.css";

const HeaderComponent = ({ setShowChatbar, showChatbar }) => {
  let activeStyle = {
    textDecoration: "underline",
    color : '#66999b'
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
            to={routes.Detail}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {routes.Detail}
          </NavLink>
          <NavLink
            className={styles.navlink}
            to={routes.About}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
         >
            {routes.About}
          </NavLink>
        </div>
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
