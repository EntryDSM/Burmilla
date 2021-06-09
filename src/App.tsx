import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Login from "page/Login";
import Statistics from "page/Statistics";
import Applicant from "page/Applicant";
import Admission from "page/Admission";
import CheckToken from "./components/common/CheckToken";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={() => <Login />} />
        <Header />
        <CheckToken>
          <Route exact path="/" component={() => <Statistics />} />
          <Route exact path="/applicant" component={() => <Applicant />} />
          <Route exact path="/admission" component={() => <Admission />} />
          <Route component={() => <Redirect to="/" />} />
        </CheckToken>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
