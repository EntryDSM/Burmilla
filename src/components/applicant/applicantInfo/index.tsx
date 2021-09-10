import React, { FC } from "react";
import UnSubmitted from "./unSubmitted";
import Submitted from "./submitted";
import {
  GetApplicantsListResponse,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
  UpdateApplicantSubmitStatusPayload,
} from "../../../data/api/apiTypes";

interface Props {
  isContainerWidth: boolean;
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => void;
  updateApplicantSubmitStatus: (
    payload: UpdateApplicantSubmitStatusPayload
  ) => void;
  setIsContainerWidth: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const ApplicantInfo: FC<Props> = ({
  isContainerWidth,
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  updateApplicantSubmitStatus,
  setIsContainerWidth,
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
              isContainerWidth={isContainerWidth}
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
              updateApplicantSubmitStatus={updateApplicantSubmitStatus}
              setIsContainerWidth={setIsContainerWidth}
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
        isContainerWidth={isContainerWidth}
        not_submitted_applicant={currnetApplicantInfo.not_submitted_applicant}
        setIsContainerWidth={setIsContainerWidth}
      />
    );
  }
};

export default ApplicantInfo;
