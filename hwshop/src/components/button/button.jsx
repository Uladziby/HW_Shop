import styles from "./styles.module.css";
import React  from 'react';

export const Button = ({ text, onClick, type, style, disabled = false }) => {
  return (
    <button style={{...style}} className={styles.btn_primary} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
};
