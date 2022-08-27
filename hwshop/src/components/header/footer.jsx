import { useEffect } from "react";
import { err_msg } from "../../common/constants";
import styles from "./styles.module.css";
import React  from 'react';

const TIME_SHOWING_ERROR = 10000;

const FooterComponent = ({ isShowNotification, handlerShowNotification }) => {
  useEffect(() => {
    setTimeout(() => {
      handlerShowNotification(false);
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
