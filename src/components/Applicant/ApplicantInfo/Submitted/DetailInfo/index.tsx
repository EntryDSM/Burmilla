import * as React from "react";

import GEDDetailInfo from "./GEDDetailInfo";
import GeneralDetailInfo from "./GeneralDetailInfo";
import {
  ApplicantPrivacy,
  ApplicantEvaluation,
} from "../../../../../data/api/apiTypes";

interface Props {
  isGED: boolean;
  applicantPrivacy: ApplicantPrivacy;
  applicantEvaluation: ApplicantEvaluation;
}

function DetailInfo({ isGED, applicantPrivacy, applicantEvaluation }: Props) {
  return isGED ? (
    <GEDDetailInfo
      applicantPrivacy={applicantPrivacy}
      applicantEvaluation={applicantEvaluation}
    />
  ) : (
    <GeneralDetailInfo
      applicantPrivacy={applicantPrivacy}
      applicantEvaluation={applicantEvaluation}
    />
  );
}

export default DetailInfo;
