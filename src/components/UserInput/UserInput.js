import React, { useState } from "react";

import Button from "../UI/Button/Button";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameSetupHandler = (event) => {
    setName(event.target.value);
  };

  const ageSetupHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (name === "" || age === "") {
      props.onError({
        msg: "Please enter a valid name and age!",
      });
    } else if (parseInt(age) < 0) {
      props.onError({
        msg: "Please enter a valid age > 0!",
      });
    } else {
      props.onSuccess({ name, age });
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles["user-input"]}>
      <label className={styles["user-input__label"]} htmlFor="name">
        Username
      </label>
      <input
        className={styles["user-input__input"]}
        type="text"
        id="name"
        onChange={nameSetupHandler}
      />
      <label className={styles["user-input__label"]} htmlFor="age">
        Age (Years)
      </label>
      <input
        className={styles["user-input__input"]}
        type="number"
        id="age"
        onChange={ageSetupHandler}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserInput;
