import React, { FC } from "react";
import * as S from "./style";
import ApplicantsListHeader from "./applicantsListHeader";
import ApplicantsListItem from "./applicantsListItem";
import {
  GetApplicantsListPayload,
  GetApplicantsListResponse,
  GetApplicantInfoResponse,
  // GetApplicantInfoResponseSuccess,
  // GetApplicantInfoResponseFailure,
  GetApplicantInfoPayload,
} from "../../../data/api/apiTypes";

interface Props {
  applicantInfoAppear: boolean;
  filters: GetApplicantsListPayload;
  currnetApplicantInfo: GetApplicantInfoResponse;
  // currnetApplicantInfoSuccess: GetApplicantInfoResponseSuccess;
  // currnetApplicantInfoFailure: GetApplicantInfoResponseFailure;
  applicantsList: GetApplicantsListResponse;
  setApplicantInfoAppear: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const ApplicantsList: FC<Props> = ({
  applicantInfoAppear,
  filters,
  currnetApplicantInfo,
  // currnetApplicantInfoSuccess,
  // currnetApplicantInfoFailure,
  applicantsList,
  setApplicantInfoAppear,
  getApplicantInfo,
}) => {
  const handleClickListItem = React.useCallback((receipt_code: number) => {
    getApplicantInfo({ receipt_code });
    setApplicantInfoAppear(!applicantInfoAppear);
  }, []);

  return (
    <S.ApplicantsList>
      <ApplicantsListHeader />
      <tbody className="no-select">
        {applicantsList.applicants_information_responses &&
          applicantsList.applicants_information_responses.map((info) => (
            <ApplicantsListItem
              currnetApplicantInfo={currnetApplicantInfo}
              // currnetApplicantInfoSuccess={currnetApplicantInfoSuccess}
              // currnetApplicantInfoFailure={currnetApplicantInfoFailure}
              key={info.receipt_code}
              applicantInfo={info}
              handleClick={handleClickListItem}
            />
          ))}
      </tbody>
    </S.ApplicantsList>
  );
};

export default ApplicantsList;
