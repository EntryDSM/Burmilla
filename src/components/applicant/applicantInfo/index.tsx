import React, { FC } from "react";
import UnSubmitted from "./unSubmitted";
import Submitted from "./submitted";
import {
  GetApplicantsListResponse,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
} from "../../../data/api/apiTypes";

interface Props {
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: UpdateApplicantStatusPayload;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  // resetUpdateStatus;
}

const ApplicantInfo: FC<Props> = ({
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  getApplicantInfo,
  // resetUpdateStatus,
}) => {
  return currnetApplicantInfo.submitted_applicant ? (
    <>
      {applicantsList.applicants_information_responses &&
        applicantsList.applicants_information_responses.map((info) => (
          <Submitted
            applicantPersonalData={
              currnetApplicantInfo.submitted_applicant.personal_data
            }
            applicantEvaluation={
              currnetApplicantInfo.submitted_applicant.evaluation
            }
            applicantStatus={currnetApplicantInfo.submitted_applicant.status}
            applicantListItem={info}
            updateApplicantStatusStatus={updateApplicantStatusStatus}
            updateApplicantStatus={updateApplicantStatus}
            getApplicantInfo={getApplicantInfo}
            // resetUpdateStatus={resetUpdateStatus}
          />
        ))}
    </>
  ) : (
    <UnSubmitted
      not_submitted_applicant={currnetApplicantInfo.not_submitted_applicant}
    />
  );
};

export default ApplicantInfo;
