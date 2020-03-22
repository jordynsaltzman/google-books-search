import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/search"]} component={Search} />
        <Route exact path={"/saved"} component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
