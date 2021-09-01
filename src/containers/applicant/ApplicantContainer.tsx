import React, { FC, Suspense } from "react";
import { useApplicant } from "../../hooks/applicant";

const Applicant = React.lazy(() => import("../../components/applicant"));

const ApplicantContainer: FC = () => {
  const { state, setState } = useApplicant();

  React.useEffect(() => {
    setState.getApplicantsList(state.filters);
  }, []);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Applicant {...state} {...setState} />;
    </Suspense>
  );
};

export default ApplicantContainer;
