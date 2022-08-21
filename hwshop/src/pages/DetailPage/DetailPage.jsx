import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../components/api/api";
import styles from "./styles.module.css";

const DetailPage = ({}) => {
  const params = useParams();
  const [detailInfo, setDetailInfo] = useState({
    title: "",
    description: "",
    images: [],
    category: { name: "" },
  });
  useEffect(() => {
    getProduct(params.id)
      .then((res) => {
        setDetailInfo(res);
        console.log(res);
      })
      .then(() => {
        console.log(detailInfo);
      });
  }, []);
  return (
    <div className={styles.container_detail}>
      <div className={styles.detail}>
        <h2>{detailInfo.title}</h2>
        <div className={styles.detail_content}>
          <div className={styles.detail_content_right}>{detailInfo.images[0]}</div>
          <div className={styles.detail_content_left}>
            <span>description: {detailInfo.description}</span>
            <span> category : {detailInfo.category.name} people </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
