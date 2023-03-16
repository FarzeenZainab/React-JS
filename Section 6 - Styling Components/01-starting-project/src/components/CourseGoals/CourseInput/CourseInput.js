import React, { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "../../UI/Button/Button";

export default function CourseInput({ onClickHandler }) {
  const [enteredValue, setEnteredValue] = useState("");
  const [message, setMessage] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length >= 0) {
      setEnteredValue(event.target.value);
      setMessage(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim() !== "") {
      const newGoalItem = { id: Math.random(), text: enteredValue };
      onClickHandler(newGoalItem);
      setMessage(false);
      setEnteredValue("");
    } else {
      setMessage(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles.form_control} ${message && styles["inValid"]}`}>
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
        <br />
        {message && <span>enter goal</span>}
      </div>
      <Button type="submit" className="submit">
        Add Goal
      </Button>
    </form>
  );
}
