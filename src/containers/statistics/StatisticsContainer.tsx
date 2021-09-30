import React, { FC, Suspense } from "react";
import { useHistory } from "react-router";
import { clearStorage } from "../../utils/token";
import { useAuth } from "../../hooks/auth";
import { useSignIn } from "../../hooks/signin";
import { useStatistics } from "../../hooks/statistics";

const Statistics = React.lazy(() => import("../../components/statistics"));

const StatisticsContainer: FC = () => {
  const statisticsState = useStatistics();
  const authState = useAuth();
  const signinState = useSignIn();
  const history = useHistory();
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

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  React.useEffect(() => {
    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403 || errorStatus === 404) {
      refreshToken();
      clearStorage();
    }
  }, [statisticsState.state.error]);

  React.useEffect(() => {
    if (authState.state.isLogin) statisticsState.setState.getStatistics();
  }, [authState.state.isLogin, history.location.pathname]);

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
