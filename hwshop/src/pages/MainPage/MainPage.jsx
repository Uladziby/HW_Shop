import { useState, useEffect } from "react";
import { getAllProducts } from "../../api/api";
import CardComponent from "../../components/card/card";
import styles from "./styles.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "../../redux/reducers/mainSlice";
import { useLayoutEffect } from "react";

const initialProduct = {
  category: "",
  description: "",
  images: "",
  price: 0,
  title: "",
};
const LIMIT_ON_PAGE = 10;
const MainPage = ({ handlerShowNotification }) => {
  const [limitItems, setLimitItems] = useState(LIMIT_ON_PAGE);
  const [isLoadMore, setLoadMore] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.main.products);

  useLayoutEffect(() => {
    dispatch(fetchProducts(limitItems));
  }, [limitItems]);

  const handlerLimitItems = () => {
    const rowItems = 5;
    setLimitItems((prev) => prev + rowItems);
    if (limitItems > products.length) {
      setLoadMore(false);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {products.map((item, idx) => {
          return <CardComponent key={idx} item={item} showNotification={handlerShowNotification} />;
        })}
      </div>
      <button disabled={!isLoadMore} onClick={handlerLimitItems}>
        Show more products
      </button>
    </div>
  );
};

export default MainPage;
