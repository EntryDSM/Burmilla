import React, { FC } from "react";

import QualificationexamDetailInfo from "./QualificationexamDetailInfo";
import GeneralDetailInfo from "./GeneralDetailInfo";
import {
  ApplicantPersonalData,
  ApplicantEvaluation,
} from "../../../../../data/api/apiTypes";

interface Props {
  isQUALIFICATION_EXAM: boolean;
  applicantPersonalData: ApplicantPersonalData;
  applicantEvaluation: ApplicantEvaluation;
}

const DetailInfo: FC<Props> = ({
  isQUALIFICATION_EXAM,
  applicantPersonalData,
  applicantEvaluation,
}) => {
  return isQUALIFICATION_EXAM ? (
    <QualificationexamDetailInfo
      applicantPersonalData={applicantPersonalData}
      applicantEvaluation={applicantEvaluation}
    />
  ) : (
    <GeneralDetailInfo
      applicantPersonalData={applicantPersonalData}
      applicantEvaluation={applicantEvaluation}
    />
  );
};

export default DetailInfo;
