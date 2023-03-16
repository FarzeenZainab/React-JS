import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", 1);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          onLogout: logoutHandler,
        }}
      >
        <MainHeader isAuthenticated={isLoggedIn} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home />}
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;

// function App() {
//   const [input, setInput] = useState();

//   // it will run on every re-render, that means on every update during the lifecycle
//   useEffect(() => {
//     console.log("I re-render");
//   });

//   // it will run on the first render, when the component mounts the first time on to the page, don;t run if there are subsequent mounts
//   useEffect(() => {
//     console.log("I mounted");
//   }, []);

//   // It will run on the first mount and when ever the input changes
//   useEffect(() => {
//     console.log("re-rendered, input changed");

//     // Cleanup function
//     // It will run when the component unmounted and before it is re-renders on to the page
//     return () => {
//       console.log("we un-mounted");
//     };
//   }, [input]);

//   function inputHandler(e) {
//     setInput(e.target.value);
//   }

//   return <input type="text" onChange={inputHandler} />;
// }
