import React from "react";
import ActivitiesFeed from "./components/ActivitiesFeed";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useAppContext } from "./Context";
import { Switch, Route } from "react-router-dom";
import { ButtonTop } from "./components/StyledComponents";
import styled from "styled-components";

const AppBody = styled.div`
  font-family: arial;
  font-sieze: 16px;
`;

function App() {
  const { scrollOnTop } = useAppContext();

  return (
    <AppBody className="App">
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
    </AppBody>
  );
}

export default App;
