/** @format */

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button } from "../../components/button/button";
import styles from "./styles.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/reducers/cartSlice";
import { mainSelector, userSelector } from "../../redux/selectors";
import { fetchProductById, notifyLogin } from "../../redux/reducers/mainSlice";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const { name } = useSelector(userSelector);
  const { detailInfo, error } = useSelector(mainSelector);

  useEffect(() => {
    dispatch(fetchProductById(params.id));
  }, []);

  const handleChangeInput = (event) => {
    const quantity = Number(event.target.value);
    if (quantity >= 0) setQuantity(quantity);
  };

  const handlerAddToCart = () => {
    name ? dispatch(addItem({ ...detailInfo, amount: quantity })) : dispatch(notifyLogin(true));
  };

  return (
    <div className={styles.container_detail}>
      <div className={styles.detail}>
        {detailInfo && !error ? (
          <div className={styles.detail_content}>
            <div className={styles.detail_content_left}>
              {<img src={detailInfo.image} alt="img_product" height={400} />}
            </div>
            <div className={styles.detail_content_right}>
              <h2 className={styles.detail_title}>{detailInfo.title}</h2>
              <span>{detailInfo.description}</span>
              <span className={styles.category_text}> category : {detailInfo.category}</span>
              <span className={styles.category_text}> price : {detailInfo.price}$</span>
              <div className={styles.block_buy}>
                <input
                  className={styles.block_buy_input}
                  type="number"
                  value={quantity}
                  onChange={handleChangeInput}
                  placeholder="quantity"
                />
                <Button
                  style={{ width: 70 + "%" }}
                  text={"Add to Cart"}
                  onClick={handlerAddToCart}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2>Error msg : The product is not exist or incorrect address. ( {error}) </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
