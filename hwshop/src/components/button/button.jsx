import styles from "./styles.module";

export const Button = ({ text, onClick, type, styleButton, disabled = false }) => {
  return (
    <button className={styles.btn_primary} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
};
