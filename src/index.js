import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
