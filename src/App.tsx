import React from "react";
import { ActivitiesFeed } from "./components/ActivitiesFeed";
import { Home } from "./components/Home";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

const AppBody = styled.div`
  font-family: arial;
  font-sieze: 16px;
`;

function App() {
  return (
    <AppBody className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/activities">
          <ActivitiesFeed />
        </Route>
      </Switch>
    </AppBody>
  );
}

export default App;
