import React, { FC, Suspense } from "react";
import { useApplicant } from "../../hooks/applicant";
import { useSignIn } from "../../hooks/signin";
import { useAuth } from "../../hooks/auth";
import { useHistory } from "react-router";
import { useStatistics } from "src/hooks/statistics";

const Applicant = React.lazy(() => import("../../components/applicant"));

const ApplicantContainer: FC = () => {
  const { state, setState } = useApplicant();
  const history = useHistory();
  const statisticsState = useStatistics();
  const authState = useAuth();
  const signinState = useSignIn();

  React.useEffect(() => {
    setState.getApplicantsList(state.filters);
  }, []);

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  React.useEffect(() => {
    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401) {
      refreshToken();
    }
  }, [statisticsState.state.error]);

  React.useEffect(() => {
    if (authState.state.isLogin) statisticsState.setState.getStatistics();
  }, [authState.state.isLogin, history.location.pathname]);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Applicant {...state} {...setState} />;
    </Suspense>
  );
};

export default ApplicantContainer;
