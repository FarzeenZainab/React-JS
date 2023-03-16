import React, { useState } from "react";
import { login } from "./utils";

export default function LoginUseState() {
  const [username, setusername] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState(false);
  const [user, setUser] = useState("");
  function usernameHandler(e) {
    setusername(e.target.value);
  }

  function passHandler(e) {
    setPass(e.target.value);
  }

  const checkCredentials = (username, pass) => {
    if (username === "harry" && pass === "123") {
      setSucess(true);
      setusername("");
      setPass("");
      setUser(username);
    } else {
      setError("Incorrect username of password");
    }
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    checkCredentials(username, pass);
    console.log(username, pass);
    setIsLoading(false);
  };

  const logoutHandler = () => {
    setSucess(false);
    console.log(username, pass);
  };

  return (
    <div className="App">
      <div className="login-container">
        {sucess ? (
          <>
            <h1>Welcome {user} </h1>
            <button className="submit" disabled={isLoading} onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <form className="form" onSubmit={submitFormHandler}>
            <p>Please Login!</p>
            {error && <span className="error">{error}</span>}
            <input type="text" placeholder="username" value={username} onChange={usernameHandler} />
            <input type="password" placeholder="password" value={pass} onChange={passHandler} />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging In" : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
