import React, { FC, Suspense } from "react";
import ScheduleDummyData from "../../utils/util/loadingDummyData/ScheduleDummyData";
import { useSchedule } from "../../hooks/schedule";
import { useFooter } from "../../hooks/default";
import {
  BEFORE_FIRST_ANNOUNCEMENT,
  BEFORE_INTERVIEW,
  BEFORE_SECOND_ANNOUNCEMENT,
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  NOT_APPLICATION_PERIOD,
  SECOND_ANNOUNCEMENT,
  START_DATE,
  scheduleType,
} from "../../data/modules/redux/reducer/schedule/scheduleConstance";

const Main = React.lazy(() => import("../../components/Main"));

const MainContainer: FC = () => {
  const Footer = useFooter();
  const scheduleState = useSchedule();
  const getNowProcess = (status: string) => {
    if (!scheduleState.state.processes[status]) return ScheduleDummyData;
    if (status === "NOT_APPLICATION_PERIOD")
      return scheduleState.state.processes[START_DATE];
    if (status === "BEFORE_FIRST_ANNOUNCEMENT")
      return scheduleState.state.processes[FIRST_ANNOUNCEMENT];
    if (status === "BEFORE_SECOND_ANNOUNCEMENT")
      return scheduleState.state.processes[SECOND_ANNOUNCEMENT];
    if (status === "BEFORE_INTERVIEW")
      return scheduleState.state.processes[INTERVIEW];
    return scheduleState.state.processes[status];
  };

  const status = scheduleState.state.status;
  const dates = scheduleState.state.date;
  const getNowProcessDate = (status: scheduleType): string => {
    if (status === NOT_APPLICATION_PERIOD)
      return dates.filter((date) => date.type === START_DATE)[0].date;
    if (status === BEFORE_FIRST_ANNOUNCEMENT) {
      return dates.filter((date) => date.type === FIRST_ANNOUNCEMENT)[0].date;
    }
    if (status === BEFORE_SECOND_ANNOUNCEMENT)
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
