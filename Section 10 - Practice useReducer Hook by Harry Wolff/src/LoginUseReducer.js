import React, { useReducer } from "react";

/*
  What is that we want to acheive?
  We want to build a login form with validation and error handling

  1. When want to store what the user types and validate that with the stored credentials

  2. When the user clicks on the log in button, while the server is processing the data user should see "logging in" on the button
  
  3. If the credentials are not correct then show the msg error

  4. If the user succesfully signedin then show "hello user"

*/

// Login Reducer function

// Reducer function is always a pure function that will return same value / result if the same arguments are passed to the function

// it will return the new state to the component, when ever there is a change and the component re-evaluetes, the reducer function will return the new state snapshot
const loginReducer = (state, action) => {
  switch (action.type) {
    case "userUserameInput":
      return {
        ...state,
        username: action.val,
      };

    case "userPassInput":
      return {
        ...state,
        password: action.val,
      };

    case "isLoggingIn":
      return {
        ...state,
        isLoggingIn: true,
      };

    case "inputIsInvalid":
      return {
        ...state,
        isError: "Incorrect username or password",
        isLoggingIn: false,
      };

    case "isLoggedIn":
      return {
        isLoggedIn: true,
        isLoggingIn: false,
        isError: "",
        username: state.username,
      };

    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        isError: "",
        password: "",
        username: state.username,
      };
  }
};

export default function LoginUseReducer() {
  // we use reducer when we have to manage complex state and we are managing object
  const initialState = {
    username: "",
    password: "",
    isError: "",
    isLoggingIn: false,
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(loginReducer, initialState);

  const usernameHandler = (e) => {
    dispatch({ type: "userUserameInput", val: e.target.value });
  };

  const passwordHandler = (e) => {
    dispatch({ type: "userPassInput", val: e.target.value });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "isLoggingIn" });
    setTimeout(() => {
      if (state.username === "farzeen" && state.password === "123") {
        dispatch({ type: "isLoggedIn" });
      } else {
        dispatch({ type: "inputIsInvalid" });
      }
    }, 3000);
  };

  const logoutUser = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div className="App">
      {state.isLoggedIn ? (
        <div>
          <h4>Welcome {state.username}</h4>
          <button className="submit" onClick={logoutUser}>
            Logout
          </button>
        </div>
      ) : (
        <div className="login-container">
          <h2>reducer login</h2>
          <form className="form" onSubmit={submitFormHandler}>
            <p>Please Login!</p>
            {state.isError && <span className="error">{state.isError}</span>}
            <input type="text" placeholder="username" value={state.username} onChange={usernameHandler} />
            <input type="password" placeholder="password" value={state.password} onChange={passwordHandler} />
            <button className="submit" type="submit">
              {state.isLoggingIn ? "Logging In" : "Log in"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
