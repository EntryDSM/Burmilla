import React, { FC, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useSignIn } from "../../hooks/signin";
import { useStatistics } from "src/hooks/statistics";
import Header from "../../components/header/Header";

const HeaderContainer: FC = () => {
  const authState = useAuth();
  const signinState = useSignIn();
  const statisticsState = useStatistics();

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  useEffect(() => {
    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [statisticsState.state.error]);

  return <Header {...authState.state} {...authState.setState} />;
};

export default HeaderContainer;
