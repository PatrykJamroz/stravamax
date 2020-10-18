import React, { useState, useEffect } from "react";
import ActivitiesFeed from "./ActivitiesFeed";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ActivitiesFeed />
    </div>
  );
}

export default App;
