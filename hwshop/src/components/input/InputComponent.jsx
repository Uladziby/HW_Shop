import React from "react";
import input_style from "./input.module.css";

const InputComponent = ({
  isEmpty,
  placeholder,
  name,
  onChange,
  errorMsg,
  showErrMsg,
  value,
  maxlength,
  type,
}) => {
  return (
    <div className={input_style.form__group}>
      <input
        type={type}
        className={input_style.form__field}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        maxLength={maxlength}
        required
      />
      <label className={input_style.form__label} htmlFor={name}>
        {placeholder}
      </label>
      {showErrMsg && <div className={input_style.error_msg}>sadasd</div>}
    </div>
  );
};
export default InputComponent;
