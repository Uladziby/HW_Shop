import { useState, useEffect } from "react";
import { getAllProducts } from "../../components/api/api";
import CardComponent from "../../components/card/card";
import styles from "./styles.module.css";

const initialProduct = {
  category: '',
  description: "",
  images: '',
  price: 0,
  title: "",
};

const MainPage = ({ handlerShowNotification }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
    .then((data) => {
      setProducts(data);
    })
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {products.map((item, idx) => {
          return <CardComponent key={idx} item={item} showNotification={handlerShowNotification} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
