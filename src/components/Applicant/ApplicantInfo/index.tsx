import React, { FC } from "react";

import Unsubmitted from "./Unsubmitted";
import Submitted from "./Submitted";
import { useApplicant } from "../../../hooks/applicant";

const ApplicantInfo: FC = () => {
  const {
    applicantStore: {
      currnetApplicantInfo: {
        applicant_information,
        applicant_contact,
        school_tel,
      },
    },
  } = useApplicant();

  return applicant_information ? (
    <Submitted
      applicantPrivacy={applicant_information.privacy}
      applicantEvaluation={applicant_information.evaluation}
      applicantStatus={applicant_information.status}
    />
  ) : (
    <Unsubmitted
      applicant_contact={applicant_contact}
      school_tel={school_tel || null}
    />
  );
};

export default ApplicantInfo;
