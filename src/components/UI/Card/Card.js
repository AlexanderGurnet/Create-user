import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <section
      className={`${styles.card} ${
        props.isSpaced ? styles["card_spaced"] : ""
      } ${props.className}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
