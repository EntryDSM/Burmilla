import React, { FC } from "react";

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

const DetailInfo: FC<Props> = ({
  isGED,
  applicantPrivacy,
  applicantEvaluation,
}) => {
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
};

export default DetailInfo;
