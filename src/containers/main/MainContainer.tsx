import React, { FC, Suspense } from "react";
import ScheduleDummyData from "../../utils/util/loadingDummyData/ScheduleDummyData";
import { useHistory } from "react-router";
import { useStatistics } from "src/hooks/statistics";
import { useSchedule } from "../../hooks/schedule";
import { useAuth } from "../../hooks/auth";
import { useSignIn } from "../../hooks/signin";
import { useFooter } from "../../hooks/default";
import {
  APPLICATION_PERIOD,
  BEFORE_FIRST_ANNOUNCE,
  BEFORE_INTERVIEW,
  BEFORE_SECOND_ANNOUNCE,
  END_DATE,
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  NOT_APPLICATION_PERIOD,
  SECOND_ANNOUNCEMENT,
  START_DATE,
  scheduleType,
} from "../../data/modules/redux/reducer/schedule/scheduleConstance";
import { REFRESH_TOKEN } from "src/data/modules/redux/action/signin";

const Main = React.lazy(() => import("../../components/main"));

const MainContainer: FC = () => {
  const Footer = useFooter();
  const scheduleState = useSchedule();
  const statisticsState = useStatistics();
  const authState = useAuth();
  const signinState = useSignIn();
  const history = useHistory();
  const getNowProcess = (status: string) => {
    if (!scheduleState.state.processes[status]) return ScheduleDummyData;
    return scheduleState.state.processes[status];
  };

  const status = scheduleState.state.status;
  const dates = scheduleState.state.date;

  const getNowProcessDate = (status: scheduleType): string => {
    if (status === APPLICATION_PERIOD) {
      return dates.filter((date) => date.type === END_DATE)[0].date;
    }
    if (status === NOT_APPLICATION_PERIOD)
      return dates.filter((date) => date.type === START_DATE)[0].date;
    if (status === BEFORE_FIRST_ANNOUNCE) {
      return dates.filter((date) => date.type === FIRST_ANNOUNCEMENT)[0].date;
    }
    if (status === BEFORE_SECOND_ANNOUNCE)
      return dates.filter((date) => date.type === SECOND_ANNOUNCEMENT)[0].date;
    if (status === BEFORE_INTERVIEW)
      return dates.filter((date) => date.type === INTERVIEW)[0].date;
    const result = dates.filter((date) => {
      return status === date.type;
    })[0];
    return result ? result.date : "";
  };

  React.useEffect(() => {
    scheduleState.setState.getStatus();
  }, []);

  const refreshToken = () => {
    signinState.setState.refreshToken(scheduleState.setState.getStatus);
  };

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
    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [statisticsState.state.error]);

  React.useEffect(() => {
    if (authState.state.isLogin) statisticsState.setState.getStatistics();
  }, [authState.state.isLogin, history.location.pathname]);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Main
        status={status}
        date={getNowProcessDate(status)}
        process={getNowProcess(scheduleState.state.status)}
      />
      {Footer}
    </Suspense>
  );
};

export default MainContainer;
