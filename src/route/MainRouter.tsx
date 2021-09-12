import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LoginContainer,
  MainContainer,
  ScheduleContainer,
  StatisticsContainer,
  ApplicantContainer,
} from "../containers";
import HeaderContainer from "../containers/header";

const MainRouter = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/total" component={StatisticsContainer} />
        <Route exact path="/schedule" component={ScheduleContainer} />
        <Route exact path="/applicant" component={ApplicantContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
