import React, { FC, Suspense } from "react";
import { useApplicant } from "../../hooks/applicant";
import { useSignIn } from "../../hooks/signin";
import { useAuth } from "../../hooks/auth";
import { useHistory } from "react-router";
import { useStatistics } from "src/hooks/statistics";
import { REFRESH_TOKEN } from "src/data/modules/redux/action/signin";

const Applicant = React.lazy(() => import("../../components/applicant"));

const ApplicantContainer: FC = () => {
  const applicantState = useApplicant();
  const history = useHistory();
  const statisticsState = useStatistics();
  const authState = useAuth();
  const signinState = useSignIn();

  React.useEffect(() => {
    applicantState.setState.getApplicantsList(applicantState.state.filters);
  }, []);

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  React.useEffect(() => {
    if (
      applicantState.state.error.status === 401 &&
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
      <Applicant {...applicantState.state} {...applicantState.setState} />;
    </Suspense>
  );
};

export default ApplicantContainer;
