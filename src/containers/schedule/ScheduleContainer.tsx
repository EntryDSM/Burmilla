import React, { FC, Suspense } from "react";
import { useSchedule } from "../../hooks/schedule";
import { useAuth } from "../../hooks/auth";
import { getRefreshToken } from "../../utils/token";

const Schedule = React.lazy(() => import("../../components/Schedule"));

const ScheduleContainer: FC = () => {
  const { state, setState } = useSchedule();
  const { refreshtoken } = useAuth();

  React.useEffect(() => {
    const errorStatus = state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshtoken({
        refreshToken: getRefreshToken(),
      });
      console.log(refreshtoken);
    }
  }, [state.error]);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Schedule {...state} {...setState} />;
    </Suspense>
  );
};

export default ScheduleContainer;
