import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./Context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
