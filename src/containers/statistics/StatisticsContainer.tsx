import React, { FC, Suspense } from "react";
import { useHistory } from "react-router";
import { REFRESH_TOKEN } from "src/data/modules/redux/action/signin";
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
    total_submitted_applicant_count,
  } = statisticsState.state.statistics;

  React.useEffect(() => {
    statisticsState.setState.getStatistics();
  }, []);

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  React.useEffect(() => {
    if (
      statisticsState.state.error.status === 401 &&
      signinState.state.error.type === REFRESH_TOKEN
    ) {
      authState.setState.setAccessToken("");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }, [signinState.state.error]);

  React.useEffect(() => {
    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
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
        total_submitted_applicant_count={total_submitted_applicant_count}
      />
    </Suspense>
  );
};

export default StatisticsContainer;
