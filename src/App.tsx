import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  LoginContainer,
  MainContainer,
  ScheduleContainer,
  StatisticsContainer,
  ApplicantContainer,
} from "./containers";
import CheckToken from "./components/common/checkToken";
import { useHeader } from "./hooks/default";

const App = () => {
  const Header = useHeader();
  return (
    <BrowserRouter>
      {Header}
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <CheckToken>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/total" component={StatisticsContainer} />
          <Route exact path="/schedule" component={ScheduleContainer} />
          <Route exact path="/applicant" component={ApplicantContainer} />
        </CheckToken>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
