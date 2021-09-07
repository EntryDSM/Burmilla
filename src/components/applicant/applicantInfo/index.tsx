import React, { FC } from "react";
import UnSubmitted from "./unSubmitted";
import Submitted from "./submitted";
import {
  GetApplicantsListResponse,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  // GetApplicantInfoResponseSuccess,
  // GetApplicantInfoResponseFailure,
  UpdateApplicantStatusPayload,
} from "../../../data/api/apiTypes";

interface Props {
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
  // currnetApplicantInfoSuccess: GetApplicantInfoResponseSuccess;
  // currnetApplicantInfoFailure: GetApplicantInfoResponseFailure;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: UpdateApplicantStatusPayload;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  // resetUpdateStatus;
}

const ApplicantInfo: FC<Props> = ({
  applicantsList,
  currnetApplicantInfo,
  // currnetApplicantInfoSuccess,
  // currnetApplicantInfoFailure,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  getApplicantInfo,
  // resetUpdateStatus,
}) => {
  const filterResponse = applicantsList.applicants_information_responses.filter(
    (i) => {
      return (
        i.name ===
        currnetApplicantInfo?.submitted_applicant?.personal_data?.name
      );
    }
  );
  if (currnetApplicantInfo.submitted_applicant) {
    return (
      <>
        {applicantsList.applicants_information_responses &&
          filterResponse.map((info) => (
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
    );
  }
  if (currnetApplicantInfo.not_submitted_applicant) {
    return (
      <UnSubmitted
        not_submitted_applicant={currnetApplicantInfo.not_submitted_applicant}
      />
    );
  }
};

export default ApplicantInfo;
