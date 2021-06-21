import React, { FC, Suspense } from "react";

const Statistics = React.lazy(() => import("../../components/Statistics"));

const StatisticsContainer: FC = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Statistics />
    </Suspense>
  );
};

export default StatisticsContainer;
