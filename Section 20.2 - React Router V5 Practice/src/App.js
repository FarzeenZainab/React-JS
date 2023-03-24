import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound404 from "./pages/notFound404";
import Header from "./components/header";
import TwoWayBinder from "./components/TwoWayBinder";

function App() {
  let location = useLocation(); // return obj with url data
  const firstname = new URLSearchParams(location.search).get("firstname");
  const lastname = new URLSearchParams(location.search).get("lastname");
  console.log(firstname, lastname);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/home/:loggedIn" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/home/?firstname=farzeen&lastname=zainab">
          <About />
        </Route>

        <Route path="*" exact>
          <NotFound404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
