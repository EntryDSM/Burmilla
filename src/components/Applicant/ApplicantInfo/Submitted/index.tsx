import * as React from "react";

import * as S from "./style";
import ApplicantStatusContainer from "./ApplicantStatus";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import Documents from "./Documents";
import {
  ApplicantEvaluation,
  ApplicantPrivacy,
  ApplicantStatus,
} from "../../../../data/api/apiTypes";
import { returnGradeType } from "../../../../utils/checkType";

interface Props {
  applicantPrivacy: ApplicantPrivacy;
  applicantEvaluation: ApplicantEvaluation;
  applicantStatus: ApplicantStatus;
}

function Submitted({
  applicantPrivacy,
  applicantEvaluation,
  applicantStatus,
}: Props) {
  const checkGradeType = React.useCallback(() => {
    return returnGradeType(applicantPrivacy.grade_type) === "검정고시";
  }, [applicantPrivacy.apply_type]);

  return (
    <S.Wrapper>
      <ApplicantStatusContainer
        applicantStatus={applicantStatus}
        email={applicantPrivacy.email}
      />
      <BasicInfo applicantPrivacy={applicantPrivacy} />
      <DetailInfo
        isGED={checkGradeType()}
        applicantPrivacy={applicantPrivacy}
        applicantEvaluation={applicantEvaluation}
      />
      <Documents applicantEvaluation={applicantEvaluation} />
    </S.Wrapper>
  );
}

export default Submitted;
