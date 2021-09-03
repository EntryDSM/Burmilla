import React, { FC } from "react";
import * as S from "./style";
import ApplicantInfo from "./applicantInfo";
import ApplicantsList from "./applicantsList";
import FilterSearch from "./filterSearch";
import Pagination from "./pagination";
import {
  GetApplicantsListResponse,
  GetApplicantsListPayload,
  GetApplicantInfoPayload,
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
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  setFilter: (payload: GetApplicantsListPayload) => void;
}

const Applicant: FC<Props> = ({
  applicantsList,
  filters,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  // resetUpdateStatus,
  getApplicantInfo,
  setFilter,
}) => {
  return (
    <S.Applicant>
      <S.ApplicantContainer>
        <FilterSearch filters={filters} setFilter={setFilter} />
        <ApplicantsList
          filters={filters}
          applicantsList={applicantsList}
          currnetApplicantInfo={currnetApplicantInfo}
          getApplicantInfo={getApplicantInfo}
        />
        <S.PaginationBox>
          <Pagination applicantsList={applicantsList} setFilter={setFilter} />
        </S.PaginationBox>
      </S.ApplicantContainer>
      <S.ApplicantInfoWrap>
        {currnetApplicantInfo && (
          <ApplicantInfo
            applicantsList={applicantsList}
            currnetApplicantInfo={currnetApplicantInfo}
            updateApplicantStatusStatus={updateApplicantStatusStatus}
            updateApplicantStatus={updateApplicantStatus}
            getApplicantInfo={getApplicantInfo}
            // resetUpdateStatus={resetUpdateStatus}
          />
        )}
      </S.ApplicantInfoWrap>
    </S.Applicant>
  );
};

export default Applicant;
