import React, { useState, useEffect } from "react";
import ActivitiesFeed from "./components/ActivitiesFeed";
import NavBar from "./components/NavBar";
import { Context } from "./Context";
import { useContext } from "react";

function App() {
  const { scrollOnTop } = useContext(Context);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
