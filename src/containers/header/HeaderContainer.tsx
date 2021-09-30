import React, { FC } from "react";
import { useAuth } from "../../hooks/auth";
import Header from "../../components/header/Header";

const HeaderContainer: FC = () => {
  const authState = useAuth();

  return <Header {...authState.state} {...authState.setState} />;
};

export default HeaderContainer;
