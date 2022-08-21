import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../components/api/api";
import { Button } from "../../components/button/button";
import { CartContext } from "../../components/common/CartProvider";
import styles from "./styles.module.css";

const DetailPage = () => {
  const params = useParams();
  const cartContext = useContext(CartContext);

  const [detailInfo, setDetailInfo] = useState({
    title: "",
    description: "",
    images: [],
    category: { name: "" },
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
    cartContext.setCart(quantity, detailInfo.price);
  };

  return (
    <div className={styles.container_detail}>
      <div className={styles.detail}>
        <div className={styles.detail_content}>
          <div className={styles.detail_content_left}>
            {detailInfo.images.map((el, idx) => {
              return <img key={idx} src={el} alt="img_product" />;
            })}
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
