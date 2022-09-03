import styles from "./styles.module.css";
import basket from "../../assets/basket.png";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/reducers/cartSlice";
import { notifyLogin } from "../../redux/reducers/mainSlice";
import { userSelector } from "../../redux/selectors";

const CardComponent = ({ item }) => {
  const dispatch = useDispatch();
  const { name } = useSelector(userSelector);

  const { price, title, image, id } = item;
  const handlerAddToCart = () => {
    
    name ? dispatch(addItem({ ...item, amount: 1 })) : dispatch(notifyLogin(true));
  };

  return (
    <div className={styles.custom_card}>
      <Link className={styles.card_title} to={`detail/${id}`}>
        {title}
      </Link>
      <div className={styles.block_imgs}>
        <img className={styles.img} src={`${image}`} alt="product" width={200} height={100} />
      </div>
      <div className={styles.block_btn}>
        <div className={styles.card_price}>Price : {price} $</div>
        <button className={styles.btn_price} onClick={handlerAddToCart}>
          <img src={basket} alt="cart" width={30} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
