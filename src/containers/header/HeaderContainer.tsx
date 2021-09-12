import React, { useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useSignIn } from "../../hooks/signin";
import Header from "../../components/header/Header";

const HeaderContainer = () => {
  const authState = useAuth();
  const signinState = useSignIn();

  const refreshToken = () => {
    signinState.setState.refreshToken();
  };

  useEffect(() => {
    const errorStatus = authState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [authState.state.error]);

  return <Header {...authState.state} {...authState.setState} />;
};

export default HeaderContainer;
