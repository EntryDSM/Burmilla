import React, { FC, Suspense } from "react";
import { useStatistics } from "../../hooks/statistics";
import { useAuth } from "../../hooks/auth";
import { getRefreshToken } from "../../utils/token";

const Statistics = React.lazy(() => import("../../components/Statistics"));

const StatisticsContainer: FC = () => {
  const statisticsState = useStatistics();
  const { refreshtoken } = useAuth();
  const {
    common_score,
    meister_score,
    social_score,
    total_applicant_count,
    total_competition_rate,
  } = statisticsState.state.statistics;

  React.useEffect(() => {
    statisticsState.setState.getStatistics();

    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshtoken({
        refreshToken: getRefreshToken(),
      });
      console.log(refreshtoken);
    }
  }, []);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Statistics
        commonScore={common_score}
        meisterScore={meister_score}
        socialScore={social_score}
        totalApplicantCount={total_applicant_count}
        totalCompetitionRate={total_competition_rate}
      />
    </Suspense>
  );
};

export default StatisticsContainer;
