import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-router-scroll-top";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById("root")
);
