import * as React from "react";

import * as S from "./style";
import ApplicantsListHeader from "./ApplicantsListHeader";
import ApplicantsListItem from "./ApplicantsListItem";
import { useApplicant } from "../../../hooks/applicant";

function ApplicantsList() {
  const {
    applicantStore: { applicantsList },
    getApplicantInfo,
  } = useApplicant();

  const handleClickListItem = React.useCallback((email: string) => {
    getApplicantInfo({ email });
  }, []);

  return (
    <S.ApplicantsList>
      <ApplicantsListHeader />
      <tbody className="no-select">
        {applicantsList.applicants_information.map((info) => (
          <ApplicantsListItem
            key={info.email}
            applicantInfo={info}
            handleClick={handleClickListItem}
          />
        ))}
      </tbody>
    </S.ApplicantsList>
  );
}

export default ApplicantsList;
