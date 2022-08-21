import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "../../components/api/api";
import CardComponent from "../../components/card/card";
import styles from "./styles.module.css";

const initialProduct = {
  category: { id: 0, name: "", image: "" },
  description: "",
  images: [],
  price: 0,
  title: "",
};

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        console.log(products);
      });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {products.map((item) => {
          return <CardComponent key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
