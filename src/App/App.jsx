import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "components/AppNavbar/AppNavbar";
import "styles/global.scss";
import Homepage from "pages/Homepage/Homepage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/about">
          <h1>about</h1>
        </Route>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
