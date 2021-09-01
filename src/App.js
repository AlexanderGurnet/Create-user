import React, { useState } from "react";

import Card from "./components/UI/Card/Card";
import UserInput from "./components/UserInput/UserInput";
import UsersList from "./components/UsersList/UsersList";
import Modal from "./components/Modal/Modal";

import styles from "./App.module.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [invalid, setInvalid] = useState({ msg: "", state: false });

  const errorHandler = (validationObj) => {
    setInvalid({ msg: validationObj.msg, state: true });
  };

  const successHandler = (successObj) => {
    setUsers((prevUsers) => [
      {
        name: successObj.name,
        age: successObj.age,
        key: Math.random().toString(),
      },
      ...prevUsers,
    ]);
    setIsEmpty(false);
  };

  const closeHandler = (event) => {
    if (event.target.classList.contains("closable")) {
      setInvalid({ msg: "", state: false });
    }
  };

  return (
    <main className={styles.content}>
      <Card>
        <UserInput onError={errorHandler} onSuccess={successHandler} />
      </Card>
      {invalid.state && <Modal msg={invalid.msg} onClose={closeHandler} />}
      {!isEmpty && (
        <Card isSpaced={true}>
          <UsersList users={users} />
        </Card>
      )}
    </main>
  );
};

export default App;
