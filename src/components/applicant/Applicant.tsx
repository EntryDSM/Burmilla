import React, { FC } from "react";
import * as S from "./style";
// import ApplicantInfo from "./applicantInfo";
import ApplicantsList from "./applicantsList";
import FilterSearch from "./filterSearch";
import Pagination from "./pagination";
import {
  GetApplicantsListResponse,
  GetApplicantsListPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
} from "../../data/api/apiTypes";

interface Props {
  applicantsList: GetApplicantsListResponse;
  filters: GetApplicantsListPayload;
  currnetApplicantInfo: GetApplicantInfoResponse;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: UpdateApplicantStatusPayload;
  // updateApplicantList: ;
  // resetUpdateStatus;
  // getApplicantInfo: (payload: ) => void;
  setFilter: (payload: GetApplicantsListPayload) => void;
}

const Applicant: FC<Props> = ({
  applicantsList,
  filters,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  // resetUpdateStatus,
  setFilter,
}) => {
  return (
    <S.Applicant>
      <S.ApplicantContainer>
        <FilterSearch filters={filters} setFilter={setFilter} />
        <ApplicantsList applicantsList={applicantsList} filters={filters} />
        <Pagination applicantsList={applicantsList} setFilter={setFilter} />
      </S.ApplicantContainer>
      {/* <S.ApplicantInfoWrap>
        {currnetApplicantInfo && (
          <ApplicantInfo
            applicantsList={applicantsList}
            currnetApplicantInfo={currnetApplicantInfo}
            updateApplicantStatusStatus={updateApplicantStatusStatus}
            updateApplicantStatus={updateApplicantStatus}
            // resetUpdateStatus={resetUpdateStatus}
          />
        )}
      </S.ApplicantInfoWrap> */}
    </S.Applicant>
  );
};

export default Applicant;
