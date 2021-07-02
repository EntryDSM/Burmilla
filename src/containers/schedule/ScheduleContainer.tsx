import React, { FC, Suspense } from "react";
import ScheduleDummyData from "../../utils/util/loadingDummyData/ScheduleDummyData";
// import { useSchedule } from "../../hooks/schedule";
import {
  START_DATE,
  END_DATE,
  FIRST_ANNOUNCEMENT,
  SECOND_ANNOUNCEMENT,
  INTERVIEW,
  NOT_APPLICATION_PERIOD,
  BEFORE_FIRST_ANNOUNCEMENT,
  BEFORE_SECOND_ANNOUNCEMENT,
  BEFORE_INTERVIEW,
  scheduleType,
} from "../../data/modules/redux/reducer/schedule/scheduleConstance";
import { useSchedule } from "../../hooks/schedule";
// import {
//   UpdateScheduleProcessTimeType,
//   startDateType,
//   endDateType,
// } from "../../data/modules/redux/reducer/schedule/interface";

const Schedule = React.lazy(() => import("../../components/Schedule"));

interface Props {
  // scheduleProcess: UpdateScheduleProcessTimeType;
  // scheduleTimeType: startDateType | endDateType;
}

const ScheduleContainer: FC<Props> = () =>
  // {
  //   scheduleProcess,
  //   scheduleTimeType,
  // }
  {
    // const getNowScheduleProcess = (status: string) => {
    //   if (!scheduleState.state.processes[status]) return ScheduleDummyData;
    //   if (status === "START_DATE")
    //     return scheduleState.state.processes[START_DATE];
    //   if (status === "FIRST_ANNOUNCEMENT")
    //     return scheduleState.state.processes[FIRST_ANNOUNCEMENT];
    //   if (status === "SECOND_ANNOUNCEMENT")
    //     return scheduleState.state.processes[SECOND_ANNOUNCEMENT];
    //   if (status === "INTERVIEW") return scheduleState.state.processes[INTERVIEW];
    //   return scheduleState.state.processes[status];
    // };

    // const status = scheduleState.state.status;
    // const dates = scheduleState.state.date;

    // const getNowScheduleProcessDate = (
    //   status: scheduleType
    // ): startDateType | endDateType => {
    //   if (status === START_DATE)
    //     return (
    //       dates.find((date) => date.type === START_DATE).startDate[0] &&
    //       dates.find((date) => date.type === START_DATE).endDate[0]
    //     );
    //   if (status === FIRST_ANNOUNCEMENT) {
    //     return dates.find((date) => date.type === FIRST_ANNOUNCEMENT)
    //       .startDate[0];
    //   }
    //   if (status === SECOND_ANNOUNCEMENT)
    //     return dates.find((date) => date.type === SECOND_ANNOUNCEMENT)
    //       .startDate[0];
    //   if (status === INTERVIEW)
    //     return dates.find((date) => date.type === INTERVIEW).startDate[0];
    // };

    // useEffect(() => {
    //   scheduleState.setState.getStatus();
    // }, []);

    return (
      <Suspense fallback={<div>로딩중...</div>}>
        <Schedule
        // status={status}
        // date={getNowScheduleProcessDate(status)}
        // process={getNowScheduleProcess(scheduleState.state.status)}
        // type={scheduleProcess.type}
        // scheduleTimeType={scheduleTimeType}
        />
      </Suspense>
    );
  };

export default ScheduleContainer;
