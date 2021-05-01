import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import Inventions from "./components/Inventions";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
        <Route exact path="/inventions" render={() => <Inventions />} />
      </Switch>
    );
  }
}

export default withRouter(App);
