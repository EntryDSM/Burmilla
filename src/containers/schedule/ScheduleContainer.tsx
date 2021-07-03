import React, { FC, Suspense } from "react";
import { useSchedule } from "../../hooks/schedule";

const Schedule = React.lazy(() => import("../../components/Schedule"));

const ScheduleContainer: FC = () => {
  const scheduleState = useSchedule();

  const dates = scheduleState.state.date;
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Schedule />
    </Suspense>
  );
};

export default ScheduleContainer;
