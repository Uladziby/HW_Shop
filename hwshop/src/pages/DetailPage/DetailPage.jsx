import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../api/api";
import { Button } from "../../components/button/button";
import { AppContext } from "../../common/AppProvider";
import styles from "./styles.module.css";
import React  from 'react';

const DetailPage = ({ handlerShowNotification }) => {
  const params = useParams();
  const appContext = useContext(AppContext);

  const [detailInfo, setDetailInfo] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    id: "",
  });
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getProduct(params.id).then((res) => {
      setDetailInfo(res);
    });
  }, []);

  const handleChangeInput = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handlerAddToCart = () => {
    appContext.user.name
      ? appContext.setCart(quantity, detailInfo.price)
      : handlerShowNotification(true);
  };

  return (
    <div className={styles.container_detail}>
      <div className={styles.detail}>
        <div className={styles.detail_content}>
          <div className={styles.detail_content_left}>
            {/*  {detailInfo.images.map((el, idx) => {
              return <img key={idx} src={el} alt="img_product" height={400} />;
            })} */}
            <img src={detailInfo.image} alt="img_product" height={400} />;
          </div>
          <div className={styles.detail_content_right}>
            <h2 className={styles.detail_title}>{detailInfo.title}</h2>
            <span>{detailInfo.description}</span>
            <span className={styles.category_text}> category : {detailInfo.category.name}</span>
            <span className={styles.category_text}> price : {detailInfo.price}$</span>
            <div className={styles.block_buy}>
              <input
                className={styles.block_buy_input}
                type="number"
                value={quantity}
                onChange={handleChangeInput}
                placeholder="quantity"
              />
              <Button style={{ width: 70 + "%" }} text={"Add to Cart"} onClick={handlerAddToCart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
