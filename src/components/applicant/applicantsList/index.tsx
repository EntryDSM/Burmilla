import React, { FC } from "react";
import * as S from "./style";
import ApplicantsListHeader from "./applicantsListHeader";
import ApplicantsListItem from "./applicantsListItem";
import {
  GetApplicantsListPayload,
  GetApplicantsListResponse,
  GetApplicantInfoResponse,
  GetApplicantInfoPayload,
} from "../../../data/api/apiTypes";

interface Props {
  isContainerWidth: boolean;
  filters: GetApplicantsListPayload;
  currnetApplicantInfo: GetApplicantInfoResponse;
  applicantsList: GetApplicantsListResponse;
  setIsContainerWidth: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const ApplicantsList: FC<Props> = ({
  isContainerWidth,
  filters,
  currnetApplicantInfo,
  applicantsList,
  setIsContainerWidth,
  getApplicantInfo,
}) => {
  const handleClickListItem = React.useCallback((receipt_code: number) => {
    getApplicantInfo({ receipt_code });
    setIsContainerWidth(!isContainerWidth);
  }, []);

  return (
    <S.ApplicantsList>
      <ApplicantsListHeader />
      <tbody className="no-select">
        {applicantsList.applicants_information_responses &&
          applicantsList.applicants_information_responses.map((info) => (
            <ApplicantsListItem
              currnetApplicantInfo={currnetApplicantInfo}
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
