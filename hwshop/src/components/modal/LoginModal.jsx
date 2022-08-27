import { Button } from "../button/button";
import InputComponent from "../input/InputComponent";
import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { AppContext } from "../../common/AppProvider";
import icon_close from "../../assets/close_icon.png";
import { mock_user } from "../../common/mock";
import { novalid_msg } from "../../common/constants";
import React  from 'react';

const LoginModalTemplate = ({ closeModal }) => {
  const [name, setName] = useState(mock_user.name);
  const [password, setPassword] = useState(mock_user.password);
  const appContext = useContext(AppContext);
  const [isValidate, setIsValidate] = useState(false);

  const handlerCloseModal = (e) => {
    e.preventDefault();
    closeModal();
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name !== mock_user.name || password !== mock_user.password) {
      return setIsValidate(true);
    }
    appContext.setCurrUser(name, password);
    closeModal();
  };

  return (
    <div className={`${styles.popup} `}>
      <div className={`${styles.popup_content} ${styles.active}`}>
        <div className={`${styles.popup_title}`}>
          <h3>Your Account</h3>
        </div>
        {isValidate && <div className={styles.error_msg}>{novalid_msg}</div>}
        <button className={styles.close_btn} onClick={handlerCloseModal}>
          <img src={icon_close} alt="close" width={30} />
        </button>
        <form className={styles.form} onSubmit={handlerSubmit}>
          <InputComponent
            name={"login"}
            placeholder={"login"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <InputComponent
            name={"password"}
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className={styles.form_btns}>
            <Button text={"Sign in"} styleButton={"primary"} type="submit" />
            <Button text={"Cancel"} styleButton={"add"} onClick={handlerCloseModal} />
          </div>
        </form>
      </div>
    </div>
  );
};

const LoginModal = ({ isShowModal, handlerCloseModal }) => {
  const closeModal = () => {
    handlerCloseModal();
  };
  const rootNode = document.getElementById("root");
  if (rootNode && isShowModal) {
    return ReactDOM.createPortal(<LoginModalTemplate closeModal={closeModal} />, rootNode);
  }
};

export default LoginModal;
