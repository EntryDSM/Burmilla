import React, { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { clearStorage } from "../../utils/token";
import { useAuth } from "../../hooks/auth";
import { useSignIn } from "../../hooks/signin";
import { useStatistics } from "../../hooks/statistics";
import Header from "../../components/header/Header";

const HeaderContainer: FC = () => {
  const authState = useAuth();
  const signinState = useSignIn();
  const statisticsState = useStatistics();
  const history = useHistory();

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  useEffect(() => {
    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403 || errorStatus === 404) {
      refreshToken();
      clearStorage();
    }
  }, [statisticsState.state.error]);

  useEffect(() => {
    if (authState.state.isLogin) statisticsState.setState.getStatistics();
  }, [authState.state.isLogin, history.location.pathname]);

  return <Header {...authState.state} {...authState.setState} />;
};

export default HeaderContainer;
