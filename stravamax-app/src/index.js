import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./Context";
import * as serviceWorker from "./serviceWorker";
import { format } from "prettier";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
