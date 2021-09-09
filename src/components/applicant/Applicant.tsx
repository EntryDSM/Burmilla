import React, { FC } from "react";
import * as S from "./style";
import ApplicantInfo from "./applicantInfo";
import ApplicantsList from "./applicantsList";
import FilterSearch from "./filterSearch";
import Pagination from "./pagination/index";
import {
  GetApplicantsListResponse,
  GetApplicantsListPayload,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
  UpdateApplicantSubmitStatusPayload,
} from "../../data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
  updateApplicantStatusStatus: number;
  updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => void;
  updateApplicantSubmitStatus: (
    payload: UpdateApplicantSubmitStatusPayload
  ) => void;
  // updateApplicantList: ;
  // resetUpdateStatus;
  setFilter: (payload: GetApplicantsListPayload) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
}

const Applicant: FC<Props> = ({
  filters,
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  updateApplicantStatus,
  updateApplicantSubmitStatus,
  // resetUpdateStatus,
  setFilter,
  getApplicantInfo,
}) => {
  const [isContainerWidth, setIsContainerWidth] =
    React.useState<boolean>(false);
  return (
    <S.Applicant>
      <S.ApplicantContainer>
        <FilterSearch filters={filters} setFilter={setFilter} />
        <ApplicantsList
          isContainerWidth={isContainerWidth}
          filters={filters}
          applicantsList={applicantsList}
          currnetApplicantInfo={currnetApplicantInfo}
          setIsContainerWidth={setIsContainerWidth}
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
      <S.ApplicantInfoWrap isContainerWidth={isContainerWidth}>
        {isContainerWidth && (
          <ApplicantInfo
            isContainerWidth={isContainerWidth}
            applicantsList={applicantsList}
            currnetApplicantInfo={currnetApplicantInfo}
            updateApplicantStatusStatus={updateApplicantStatusStatus}
            updateApplicantStatus={updateApplicantStatus}
            updateApplicantSubmitStatus={updateApplicantSubmitStatus}
            setIsContainerWidth={setIsContainerWidth}
            getApplicantInfo={getApplicantInfo}
            // resetUpdateStatus={resetUpdateStatus}
          />
        )}
      </S.ApplicantInfoWrap>
    </S.Applicant>
  );
};

export default Applicant;
