import React, { useEffect } from "react";

const Modal = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.closeModal();
    }, 3000);
  });

  return <div className="modal">{props.children}</div>;
};

export default Modal;
