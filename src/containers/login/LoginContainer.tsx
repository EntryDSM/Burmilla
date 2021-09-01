import React, { FC, Suspense } from "react";

const Login = React.lazy(() => import("../../components/login"));

const LoginContainer: FC = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Login />
    </Suspense>
  );
};

export default LoginContainer;
