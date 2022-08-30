/** @format */

import { useEffect } from "react";
import { err_msg } from "../../common/constants";
import styles from "./styles.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { notifyLogin } from "../../redux/reducers/mainSlice";

const TIME_SHOWING_ERROR = 10000;

const FooterComponent = () => {
  const dispatch = useDispatch();
  const isShowNotification = useSelector((state) => state.main.showNotificationMsg);

  //useEffect срабатывает 4 раза
  useEffect(() => {
    setTimeout(() => {
      dispatch(notifyLogin(false));
    }, TIME_SHOWING_ERROR);
  }, [isShowNotification]);

  return (
    <footer className={styles.header}>
      <div className={styles.header__bottom}></div>
      <div className={styles.footer__bottom}>
        <span className={`${styles.footer_error_msg} ${isShowNotification ? styles.show_err : ""}`}>
          {err_msg}
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
