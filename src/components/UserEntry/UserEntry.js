import React from "react";

import styles from "./UserEntry.module.css";

const UserEntry = (props) => {
  return (
    <li className={styles['list-item']}>
      <p className={styles['list-item__text']}>{`${props.name} (${props.age} years old)`}</p>
    </li>
  );
};

export default UserEntry;
