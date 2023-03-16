import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { act } from "react-dom/test-utils";

const emailReducer = function (state, action) {
  switch (action.type) {
    case "USER_INPUT": {
      return {
        ...state,
        value: action.val,
        isValid: action.val.includes("@"),
      };
    }

    case "VALIDATE_EMAIL": {
      return {
        ...state,
        isValid: state.value.includes("@"),
      };
    }
  }
};

// Password Reducer
const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_PASSWORD":
      return {
        ...state,
        value: action.val,
        isValid: action.val.trim().length > 6,
      };

    case "USER_PASSWORD_VALIDATE":
      return {
        ...state,
        isValid: state.value.trim().length > 6,
      };
  }
};

// Component Function
const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null, //false
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null, //false
  });

  const emailHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };

  const emailOnBlurHandler = (e) => {
    dispatchEmail({ type: "VALIDATE_EMAIL", val: e.target.value });
  };

  const passwordHandler = (e) => {
    dispatchPassword({ type: "USER_PASSWORD", val: e.target.value });
  };

  const passwordOnBlurHandler = (e) => {
    dispatchPassword({ type: "USER_PASSWORD_VALIDATE", val: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" value={emailState.value} onChange={emailHandler} onBlur={emailOnBlurHandler} />
        </div>
        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={passwordState.value} onChange={passwordHandler} onBlur={passwordOnBlurHandler} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={emailState.isValid && passwordState.isValid ? false : true}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
