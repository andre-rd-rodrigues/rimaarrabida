import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "components/AppNavbar/AppNavbar";
import Homepage from "pages/Homepage/Homepage";
import Trabalhos from "pages/Trabalhos/Trabalhos";
import About from "pages/About/About";
import Footer from "components/Footer/Footer";
import Editions from "pages/Editions/Editions";
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
        <Route path="/sobre" component={About} />
        <Route path="/edições" component={Editions} />
        <Route path="/" component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
