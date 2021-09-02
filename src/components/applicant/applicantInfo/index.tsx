import React, { FC } from "react";
import Unsubmitted from "./unSubmitted";
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
  return currnetApplicantInfo.applicant_information ? (
    <>
      {applicantsList.applicants_information_response &&
        applicantsList.applicants_information_response.map((info) => (
          <Submitted
            applicantPersonalData={
              currnetApplicantInfo.applicant_information.personal_data
            }
            applicantEvaluation={
              currnetApplicantInfo.applicant_information.evaluation
            }
            applicantStatus={currnetApplicantInfo.applicant_information.status}
            applicantListItem={info}
            updateApplicantStatusStatus={updateApplicantStatusStatus}
            updateApplicantStatus={updateApplicantStatus}
            getApplicantInfo={getApplicantInfo}
            // resetUpdateStatus={resetUpdateStatus}
          />
        ))}
    </>
  ) : (
    <Unsubmitted applicant_contact={currnetApplicantInfo.applicant_contact} />
  );
};

export default ApplicantInfo;
