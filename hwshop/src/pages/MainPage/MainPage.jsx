/** @format */

import { useState, useEffect } from "react";
import CardComponent from "../../components/card/card";
import styles from "./styles.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/mainSlice";
import { mainSelector } from "../../redux/selectors";
import { getAllProducts } from "../../api/api";
import { LOAD_MORE } from "../../common/constants";

const INIT_LIMIT = 10;
const ITEMS_ON_ROW = 5;

const MainPage = () => {
  const [isLoadMore, setLoadMore] = useState(true);
  const [limit, setLimit] = useState(INIT_LIMIT);
  const [maxItems, setMaxLimit] = useState(0);

  const dispatch = useDispatch();
  const { products } = useSelector(mainSelector);

  useEffect(() => {
    getAllProducts().then((val) => setMaxLimit(val));
    dispatch(fetchProducts(limit));
    if (limit === maxItems) setLoadMore(false);
  }, [limit]);

  const handlerLimitItems = () => {
    setLimit((prev) => prev + ITEMS_ON_ROW);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {products.map((item, idx) => {
          return <CardComponent key={idx} item={item} />;
        })}
      </div>
      <button
        disabled={!isLoadMore}
        className={styles.btn_load}
        style={{ width: "100%", background: `${isLoadMore ? "#66999b" : "grey"}` }}
        onClick={() => handlerLimitItems()}
      >
        {LOAD_MORE}
      </button>
    </div>
  );
};

export default MainPage;
