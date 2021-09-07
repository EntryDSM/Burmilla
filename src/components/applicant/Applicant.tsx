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
  applicantInfoAppear: boolean;
  filters: GetApplicantsListPayload;
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: UpdateApplicantStatusPayload;
  // updateApplicantList: ;
  // resetUpdateStatus;
  setFilter: (payload: GetApplicantsListPayload) => void;
  setApplicantInfoAppear: (payload: boolean) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const Applicant: FC<Props> = ({
  applicantInfoAppear,
  filters,
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  // resetUpdateStatus,
  setFilter,
  setApplicantInfoAppear,
  getApplicantInfo,
}) => {
  return (
    <S.Applicant>
      <S.ApplicantContainer>
        <FilterSearch filters={filters} setFilter={setFilter} />
        <ApplicantsList
          applicantInfoAppear={applicantInfoAppear}
          filters={filters}
          applicantsList={applicantsList}
          currnetApplicantInfo={currnetApplicantInfo}
          setApplicantInfoAppear={setApplicantInfoAppear}
          getApplicantInfo={getApplicantInfo}
        />
        <S.PaginationBox>
          <Pagination
            applicantsList={applicantsList}
            filters={filters}
            setFilter={setFilter}
          />
        </S.PaginationBox>
      </S.ApplicantContainer>
      <S.ApplicantInfoWrap>
        {applicantInfoAppear && (
          <ApplicantInfo
            applicantInfoAppear={applicantInfoAppear}
            applicantsList={applicantsList}
            currnetApplicantInfo={currnetApplicantInfo}
            updateApplicantStatusStatus={updateApplicantStatusStatus}
            updateApplicantStatus={updateApplicantStatus}
            setApplicantInfoAppear={setApplicantInfoAppear}
            getApplicantInfo={getApplicantInfo}
            // resetUpdateStatus={resetUpdateStatus}
          />
        )}
      </S.ApplicantInfoWrap>
    </S.Applicant>
  );
};

export default Applicant;
