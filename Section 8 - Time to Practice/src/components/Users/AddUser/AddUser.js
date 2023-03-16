import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = function ({ newUser }) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userNameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length == "" && age.trim().length == "") {
      setError({
        title: "Fields can not be empty",
        message: "Please fill in the form fields",
      });
      return;
    }
    if (age <= 0) {
      setError({
        title: "Invalid Age Entered",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }

    const userData = { username, age };
    newUser(userData);
  };

  return (
    <form onSubmit={addUserHandler} className={`${styles["add-user-form"]} `}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={userNameInputHandler} value={username} />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age" value={age} onChange={ageInputHandler} />
      <Button type="submit">Add User</Button>
      {error && <ErrorModal title={error.title} message={error.message} />}
    </form>
  );
};

export default AddUser;
