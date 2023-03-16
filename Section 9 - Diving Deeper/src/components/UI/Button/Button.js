import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, className, type, onClick }) => {
  return (
    <button type={type || "button"} className={`${styles.button} ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// if the type of the button is not set we must give it a fallback type of button using || operator
