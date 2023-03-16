import React from "react";
import style from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  const hideError = () => {};

  return (
    <div>
      <div className={style.backdrop} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={hideError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
