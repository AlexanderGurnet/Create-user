import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${styles.modal} closable`} onClick={props.onClose}>
      <Card className={styles["modal__container"]}>
        <div className={styles["modal__heading-bg"]}></div>
        <h1 className={styles["modal__heading"]}>Invalid Input</h1>
        <p className={styles["modal__text"]}>{props.msg}</p>
        <Button className={styles["modal__button"]} onClick={props.onClose}>Okay</Button>
      </Card>
    </div>
  );
};

export default Modal;
