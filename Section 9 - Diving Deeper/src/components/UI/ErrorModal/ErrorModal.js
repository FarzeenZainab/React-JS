import React from "react";
import ReactDOM from "react-dom";
import style from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

// New Component for backdrop
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick} />;
  {
    /*onClick prop*/
  }
};

const Modal = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onBtnClick}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onBtnClick} />, document.getElementById("root--backdrop"))}
      {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onBtnClick={props.onBtnClick} />, document.getElementById("root--modal"))}
    </>
  );
};

export default ErrorModal;
