import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LoginContainer,
  MainContainer,
  ScheduleContainer,
  StatisticsContainer,
  ApplicantContainer,
} from "../containers";
import CheckToken from "../components/common/checkToken/checkToken";
import HeaderContainer from "../containers/header";

const MainRouter = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <CheckToken>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/total" component={StatisticsContainer} />
          <Route exact path="/schedule" component={ScheduleContainer} />
          <Route exact path="/applicant" component={ApplicantContainer} />
        </CheckToken>
      </Switch>
    </>
  );
};

export default MainRouter;
