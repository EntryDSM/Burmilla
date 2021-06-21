import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import {
  MainContainer,
  ScheduleContainer,
  LoginContainer,
  StatisticsContainer,
} from "./containers";
import CheckToken from "./components/Common/CheckToken";
import { useHeader } from "./hooks/default";

function App() {
  const Header = useHeader();
  return (
    <BrowserRouter>
      {Header}
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <CheckToken>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="total" component={StatisticsContainer} />
          <Route exact path="/schedule" component={ScheduleContainer} />
          <Route component={() => <Redirect to="/" />} />
        </CheckToken>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
