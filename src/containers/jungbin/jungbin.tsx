import React, { FC, Suspense } from "react";

const Jungbin = React.lazy(() => import("src/components/jungbin"));

const JungbinContainer: FC = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Jungbin />
    </Suspense>
  );
};

export default JungbinContainer;
