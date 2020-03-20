import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

// pages
import { Landing, Terms, DataPolicy } from "views";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/terminos" render={props => <Terms {...props} />} />
        <Route path="/privacidad" render={props => <DataPolicy {...props} />} />
        <Route path="/" render={props => <Landing {...props} />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
