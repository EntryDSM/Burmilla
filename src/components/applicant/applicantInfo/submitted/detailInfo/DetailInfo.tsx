import React, { FC } from "react";

import QualificationexamDetailInfo from "./QualificationexamDetailInfo";
import GeneralDetailInfo from "./GeneralDetailInfo";
import {
  applicantPersonalData,
  applicantEvaluation,
} from "../../../../../data/modules/redux/reducer/applicant/interface";

interface Props {
  isQUALIFICATION_EXAM: boolean;
  applicantPersonalData: applicantPersonalData;
  applicantEvaluation: applicantEvaluation;
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
