import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Wraper from "../../Helpers/Wraper";

const AddUser = function ({ newUser }) {
  const [error, setError] = useState();

  const nameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (nameRef.current.value.trim().length == "" && ageRef.current.value.trim().length == "") {
      setError({
        title: "Fields can not be empty",
        message: "Please fill in the form fields",
      });
      return;
    }
    if (ageRef <= 0) {
      setError({
        title: "Invalid Age Entered",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }

    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;

    const userData = { username: nameValue, age: ageValue };
    newUser(userData);
  };

  const errorModalHandler = () => {
    setError(null);
  };

  return (
    <Wraper>
      {error && <ErrorModal title={error.title} message={error.message} onBtnClick={errorModalHandler} />}
      <form onSubmit={addUserHandler} className={`${styles["add-user-form"]} `}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameRef} />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" ref={ageRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Wraper>
  );
};

export default AddUser;
