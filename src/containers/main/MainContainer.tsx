import React, { FC, Suspense } from "react";

const Main = React.lazy(() => import("../../components/Main"));

const MainContainer: FC = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Main />
    </Suspense>
  );
};

export default MainContainer;
