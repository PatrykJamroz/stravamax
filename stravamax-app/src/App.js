import React, { useState, useEffect } from "react";
import ActivitiesFeed from "./components/ActivitiesFeed";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Context } from "./Context";
import { useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";

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
          <button
            style={{
              position: "fixed",
              bottom: "20px",
              right: "30px",
              backgroundColor: "#fc4c02",
            }}
            onClick={scrollOnTop}
          >
            TOP
          </button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
