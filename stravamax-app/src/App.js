import React, { useState, useEffect } from "react";
import ActivitiesFeed from "./components/ActivitiesFeed";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Context } from "./Context";
import { useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ButtonTop } from "./components/StyledComponents";

function App() {
  const { scrollOnTop } = useContext(Context);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/activities">
          <NavBar />
          <ActivitiesFeed />
          <ButtonTop
            style={{
              position: "fixed",
              bottom: "20px",
              right: "30px",
            }}
            onClick={scrollOnTop}
          >
            TOP
          </ButtonTop>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
