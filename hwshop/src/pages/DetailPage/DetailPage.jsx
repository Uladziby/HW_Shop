/** @format */

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../api/api";
import { Button } from "../../components/button/button";
import styles from "./styles.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/reducers/cartSlice";
import { userSelector } from "../../redux/selectors";
import { notifyLogin } from "../../redux/reducers/mainSlice";

const DetailPage = () => {
  const params = useParams();
  const [detailInfo, setDetailInfo] = useState({
    category: "",
    description: "",
    id: "",
    image: "",
    price: 0,
    title: "",
  });
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const { name } = useSelector(userSelector);

  useEffect(() => {
    getProduct(params.id).then((res) => {
      setDetailInfo(res);
    });
  }, []);

  const handleChangeInput = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handlerAddToCart = () => {
    name ? dispatch(addItem({ ...detailInfo, amount: quantity })) : dispatch(notifyLogin(true));
  };

  return (
    <div className={styles.container_detail}>
      <div className={styles.detail}>
        <div className={styles.detail_content}>
          <div className={styles.detail_content_left}>
            {<img src={detailInfo.image} alt="img_product" height={400} />}
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
