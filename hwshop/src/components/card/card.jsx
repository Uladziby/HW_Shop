import { useEffect, useContext } from "react";
import { useRef } from "react";
import styles from "./styles.module.css";
import basket from "../../assets/basket.png";
import { Link } from "react-router-dom";
import { AppContext } from "../common/AppProvider";

const CardComponent = ({ item: { price, title, image, category, id }, showNotification }) => {
  const card = useRef();
  const appContext = useContext(AppContext);

  const handlerAddToCart = () => {
    appContext.user.name ? appContext.setCart(1, price) : showNotification(true);
  };

/*   useEffect(() => {
    card.current.style.backgroundImage = `url(${image})`;
  }, [image]); */

  return (
    <div ref={card} className={styles.custom_card}>
      <Link className={styles.card_title} to={`detail/${id}`}>
        {title}
      </Link>
      <div className={styles.block_imgs}>
        <img className={styles.img} src={`${image}`} alt="product"  width={200} height={100}/>
      </div>
      <div className={styles.block_btn}>
        <div className={styles.card_price}>Price : {price}</div>
        <button className={styles.btn_price} onClick={handlerAddToCart}>
          <img src={basket} alt="cart" width={30} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
