import React, { FC } from "react";
import * as S from "./style";
import ApplicantInfo from "./applicantInfo";
import ApplicantsList from "./applicantsList";
import FilterSearch from "./filterSearch";
import Pagination from "./pagination/index";
import DeleteTable from "./deleteTable";
import {
  GetApplicantsListResponse,
  GetApplicantsListPayload,
  GetApplicantInfoPayload,
  GetApplicantInfoResponse,
  UpdateApplicantStatusPayload,
  UpdateApplicantSubmitStatusPayload,
  CheckPasswordRequest,
} from "../../data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  applicantsList: GetApplicantsListResponse;
  currnetApplicantInfo: GetApplicantInfoResponse;
  updateApplicantStatusStatus: number;
  isCheckPassword: boolean;
  setFilter: (payload: GetApplicantsListPayload) => void;
  updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => void;
  updateApplicantSubmitStatus: (
    payload: UpdateApplicantSubmitStatusPayload
  ) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  checkPassword: (payload: CheckPasswordRequest) => void;
  deleteApplicantTable: () => void;
}

const Applicant: FC<Props> = ({
  filters,
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  isCheckPassword,
  setFilter,
  updateApplicantStatus,
  updateApplicantSubmitStatus,
  getApplicantInfo,
  deleteApplicantTable,
  checkPassword,
}) => {
  const [isContainerWidth, setIsContainerWidth] =
    React.useState<boolean>(false);
  const [isDeleteTableModalSwitch, setIsDeleteTableModalSwitch] =
    React.useState<boolean>(false);
  return (
    <>
      {isDeleteTableModalSwitch && (
        <DeleteTable
          disable={!isCheckPassword}
          isCheckPassword={isCheckPassword}
          isDeleteTableModalSwitch={isDeleteTableModalSwitch}
          checkPassword={checkPassword}
          deleteApplicantTable={deleteApplicantTable}
          setIsDeleteTableModalSwitch={setIsDeleteTableModalSwitch}
        />
      )}
      <S.Applicant>
        <S.ApplicantContainer>
          <FilterSearch
            filters={filters}
            isCheckPassword={isCheckPassword}
            isDeleteTableModalSwitch={isDeleteTableModalSwitch}
            setFilter={setFilter}
            deleteApplicantTable={deleteApplicantTable}
            checkPassword={checkPassword}
            setIsDeleteTableModalSwitch={setIsDeleteTableModalSwitch}
          />
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
            />
          )}
        </S.ApplicantInfoWrap>
      </S.Applicant>
    </>
  );
};

export default Applicant;
