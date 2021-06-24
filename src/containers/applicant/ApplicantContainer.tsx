import React, { FC, Suspense } from "react";

const Applicant = React.lazy(() => import("../../components/Applicant"));

const ApplicantContainer: FC = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Applicant />
    </Suspense>
  );
};

export default ApplicantContainer;
