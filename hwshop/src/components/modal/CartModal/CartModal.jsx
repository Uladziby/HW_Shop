/** @format */

import { Button } from "../../button/button";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import icon_close from "../../../assets/close_icon.png";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  closeModalCart,
  increaseAmount,
  reduceAmount,
  removeItem,
} from "../../../redux/reducers/cartSlice";
import { cartSelector } from "../../../redux/selectors";

const ModalTemplate = ({ closeModal }) => {
  const {items} = useSelector(cartSelector);
  const dispatch = useDispatch();

  const handlerCloseModal = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className={`${styles.popup}`}>
      <div className={`${styles.popup_content} ${styles.active}`}>
        <div className={styles.top_content}>
          <div className={`${styles.popup_title}`}>
            <h3>Your Cart</h3>
          </div>
          <button className={styles.close_btn} onClick={handlerCloseModal}>
            <img src={icon_close} alt="close" width={30} />
          </button>
        </div>
        <div className={styles.middle_content}>
          <div className={styles.grid}>
            <div className={styles.grid_item}>id</div>
            <div className={styles.grid_item}>title</div>
            <div className={styles.grid_item}>price</div>
            <div className={styles.grid_item}>count</div>
            <div className={styles.grid_item}>total price</div>
          </div>
          {items.map((el, idx) => (
            <div key={idx} className={styles.grid}>
              <div className={styles.grid_item}>{el.id}</div>
              <div className={styles.grid_item}>{el.title}</div>
              <div className={styles.grid_item}>{el.price}</div>
              <div className={styles.grid_item}>
                <button
                  className={styles.btn_amount}
                  onClick={() => dispatch(increaseAmount(el.id))}
                >
                  +
                </button>
                <span style={{ fontSize: "20px" }}>{el.amount}</span>
                <button className={styles.btn_amount} onClick={() => dispatch(reduceAmount(el.id))}>
                  -
                </button>
              </div>
              <div className={styles.grid_item}>{(el.amount * el.price).toFixed(2)}</div>
              <div className={styles.grid_item}>
                <button className={styles.btn_amount} onClick={() => dispatch(removeItem(el.id))}>
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.grid_btns}>
          <Button disabled={true} style={{ background: "grey" }} text={"Order and Pay"} />
          <Button text={"Clear a cart"} onClick={() => dispatch(clearCart())} />
          <Button text={"Cancel"} style={{ background: "brown" }} onClick={handlerCloseModal} />
        </div>
      </div>
    </div>
  );
};

export const CartModal = () => {
  const { isShowModalCart } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalCart());
  };
  const rootNode = document.getElementById("root");
  if (rootNode && isShowModalCart) {
    return ReactDOM.createPortal(<ModalTemplate closeModal={closeModal} />, rootNode);
  }
};
