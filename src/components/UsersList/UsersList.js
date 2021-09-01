import React from "react";

import UserEntry from "../UserEntry/UserEntry";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={styles.list}>
      {props.users.map((user) => {
        return <UserEntry key={user.key} name={user.name} age={user.age} />;
      })}
    </ul>
  );
};

export default UsersList;
