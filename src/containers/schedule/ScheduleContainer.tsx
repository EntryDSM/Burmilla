import React, { FC, Suspense } from "react";
import { useAuth } from "../../hooks/auth";
import { useHistory } from "react-router";
import { useSignIn } from "../../hooks/signin";
import { useSchedule } from "../../hooks/schedule";
import { REFRESH_TOKEN } from "src/data/modules/redux/action/signin";

const Schedule = React.lazy(() => import("../../components/schedule"));

const ScheduleContainer: FC = () => {
  const scheduleState = useSchedule();
  const authState = useAuth();
  const signinState = useSignIn();
  const history = useHistory();

  const refreshToken = () => {
    signinState.setState.refreshToken(scheduleState.setState.getStatus);
  };

  React.useEffect(() => {
    scheduleState.setState.getStatus();
  }, []);

  React.useEffect(() => {
    if (
      scheduleState.state.error.status === 401 &&
      signinState.state.error.type === REFRESH_TOKEN
    ) {
      authState.setState.setAccessToken("");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }, [signinState.state.error]);

  React.useEffect(() => {
    const errorStatus = scheduleState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [scheduleState.state.error]);

  React.useEffect(() => {
    if (authState.state.isLogin) scheduleState.setState.getStatus();
  }, [authState.state.isLogin, history.location.pathname]);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Schedule {...scheduleState.state} {...scheduleState.setState} />;
    </Suspense>
  );
};

export default ScheduleContainer;
