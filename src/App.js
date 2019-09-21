import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login";
import Welcome from "./welcome";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/welcome/:username" component={Welcome} />
          <Route path="/logout" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
