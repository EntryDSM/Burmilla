import React, { FC, Suspense } from "react";
import { useAuth } from "../../hooks/auth";
import { clearStorage } from "../../utils/token";
import { useHistory } from "react-router";
import { useSignIn } from "../../hooks/signin";
import { useSchedule } from "../../hooks/schedule";

const Schedule = React.lazy(() => import("../../components/schedule"));

const ScheduleContainer: FC = () => {
  const { state, setState } = useSchedule();
  const authState = useAuth();
  const signinState = useSignIn();
  const history = useHistory();

  const refreshToken = () => {
    signinState.setState.refreshToken(setState.getStatus);
  };

  React.useEffect(() => {
    const errorStatus = state.error.status;
    if (errorStatus === 401) {
      refreshToken();
    }
  }, []);

  React.useEffect(() => {
    if (authState.state.isLogin) setState.getStatus();
  }, [authState.state.isLogin, history.location.pathname]);

  React.useEffect(() => {
    setState.getStatus();
  }, []);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Schedule {...state} {...setState} />;
    </Suspense>
  );
};

export default ScheduleContainer;
