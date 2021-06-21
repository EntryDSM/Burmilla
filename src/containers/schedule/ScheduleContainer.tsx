import React, { FC, Suspense } from "react";

const Schedule = React.lazy(() => import("../../components/Schedule"));

const ScheduleContainer: FC = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Schedule />
    </Suspense>
  );
};

export default ScheduleContainer;
