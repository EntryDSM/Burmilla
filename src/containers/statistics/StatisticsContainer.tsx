import React, { FC, Suspense } from "react";
import { useHistory } from "react-router";
import { useStatistics } from "../../hooks/statistics";

const Statistics = React.lazy(() => import("../../components/statistics"));

const StatisticsContainer: FC = () => {
  const statisticsState = useStatistics();
  const {
    common_score,
    meister_score,
    social_score,
    total_applicant_count,
    total_competition_rate,
  } = statisticsState.state.statistics;

  React.useEffect(() => {
    statisticsState.setState.getStatistics();
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
