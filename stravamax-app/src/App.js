import React, { useState, useEffect } from "react";
import ActivitiesFeed from "./components/ActivitiesFeed";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ActivitiesFeed />
    </div>
  );
}

export default App;
