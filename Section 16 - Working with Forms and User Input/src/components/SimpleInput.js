import { useState, useEffect } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(" ");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  let formIsValid = false;

  const enteredNameIsValid = enteredName.trim() !== "";

  const enteredEmailIsValid =
    enteredEmail.trim().includes("@") && enteredEmail.trim() !== "";

  // if input is touched and is empty
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && emailIsTouched;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // onChange input handler
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  // onBlur handler
  const nameBlurHandler = (e) => {
    setEnteredNameIsTouched(true);
  };

  // email
  // Change handler
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  // blur handler
  const emailBlurHandler = (e) => {
    setEmailIsTouched(true);
  };

  // form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setEnteredNameIsTouched(true);
    setEmailIsTouched(true);

    // validations
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameIsTouched(false);

    setEnteredEmail("");
    setEmailIsTouched(false);
  };

  // add classes depending on the condition
  const inputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleFormSubmit}>
      {/* name */}
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      {/* email */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
