import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "components/AppNavbar/AppNavbar";
import Homepage from "pages/Homepage/Homepage";
import Trabalhos from "pages/Trabalhos/Trabalhos";
import "styles/global.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/about">
          <h1>about</h1>
        </Route>
        <Route path="/trabalhos" component={Trabalhos} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
