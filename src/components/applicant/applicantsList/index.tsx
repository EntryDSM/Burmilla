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
  filters: GetApplicantsListPayload;
  currnetApplicantInfo: GetApplicantInfoResponse;
  applicantsList: GetApplicantsListResponse;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const ApplicantsList: FC<Props> = ({
  filters,
  currnetApplicantInfo,
  applicantsList,
  getApplicantInfo,
}) => {
  const handleClickListItem = React.useCallback((receipt_code: number) => {
    getApplicantInfo({ receipt_code });
    console.log("test", currnetApplicantInfo);
    console.log("test", applicantsList);
  }, []);

  return (
    <S.ApplicantsList>
      <ApplicantsListHeader />
      <tbody className="no-select">
        {applicantsList.applicants_information_responses &&
          applicantsList.applicants_information_responses.map((info) => (
            <ApplicantsListItem
              filters={filters}
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
