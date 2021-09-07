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
  applicantInfoAppear: boolean;
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: UpdateApplicantStatusPayload;
  setApplicantInfoAppear: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  // resetUpdateStatus;
}

const ApplicantInfo: FC<Props> = ({
  applicantInfoAppear,
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  setApplicantInfoAppear,
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
              applicantInfoAppear={applicantInfoAppear}
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
              setApplicantInfoAppear={setApplicantInfoAppear}
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
        applicantInfoAppear={applicantInfoAppear}
        not_submitted_applicant={currnetApplicantInfo.not_submitted_applicant}
        setApplicantInfoAppear={setApplicantInfoAppear}
      />
    );
  }
};

export default ApplicantInfo;
