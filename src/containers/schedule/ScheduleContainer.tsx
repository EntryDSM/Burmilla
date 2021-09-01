import React, { FC, Suspense } from "react";
import { useSchedule } from "../../hooks/schedule";

const Schedule = React.lazy(() => import("../../components/schedule"));

const ScheduleContainer: FC = () => {
  const { state, setState } = useSchedule();

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Schedule {...state} {...setState} />;
    </Suspense>
  );
};

export default ScheduleContainer;
