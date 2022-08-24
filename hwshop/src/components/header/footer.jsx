import { useEffect } from "react";
import { useRef } from "react";
import { err_msg } from "../common/constants";
import styles from "./styles.module.css";

const TIME_SHOWING_ERROR = 10000;

const FooterComponent = ({ isShowNotification, handlerShowNotification }) => {
  const errorMsg = useRef(null);

  useEffect(() => {
    if (isShowNotification) errorMsg.current.classList?.add(styles.show_err);
    setTimeout(() => {
      handlerShowNotification(false);
      errorMsg.current.classList?.remove(styles.show_err);
    }, TIME_SHOWING_ERROR);
  }, [isShowNotification]);

  return (
    <footer className={styles.header}>
      <div className={styles.header__bottom}></div>
      <div className={styles.footer__bottom}>
        <span ref={errorMsg} className={styles.footer_error_msg}>
          {err_msg}
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
