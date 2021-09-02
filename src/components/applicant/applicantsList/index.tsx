import React, { FC } from "react";

import * as S from "./style";
import ApplicantsListHeader from "./applicantsListHeader";
import ApplicantsListItem from "./applicantsListItem";
import {
  GetApplicantsListPayload,
  GetApplicantsListResponse,
  GetApplicantInfoPayload,
} from "../../../data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  applicantsList: GetApplicantsListResponse;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const ApplicantsList: FC<Props> = ({
  applicantsList,
  filters,
  getApplicantInfo,
}) => {
  const handleClickListItem = React.useCallback((receipt_code: number) => {
    getApplicantInfo({ receipt_code });
  }, []);

  return (
    <S.ApplicantsList>
      <ApplicantsListHeader />
      <tbody className="no-select">
        {applicantsList.applicants_information_response &&
          applicantsList.applicants_information_response.map((info) => (
            <ApplicantsListItem
              filters={filters}
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
