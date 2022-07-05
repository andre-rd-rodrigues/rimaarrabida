import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "components/AppNavbar/AppNavbar";
import "styles/global.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/about">
          <h1>about</h1>
        </Route>
        <Route path="/users"></Route>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
};

export default App;
