import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

// pages
import { Landing } from "views";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={props => <Landing {...props} />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
