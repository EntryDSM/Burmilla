import React, { FC } from "react";
import * as S from "./style";
import ApplicantInfo from "./applicantInfo";
import ApplicantsList from "./applicantsList";
import FilterSearch from "./filterSearch";
import Pagination from "./pagination/Pagination";
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
  password: string;
  setFilter: (payload: GetApplicantsListPayload) => void;
  updateApplicantStatus: (payload: UpdateApplicantStatusPayload) => void;
  updateApplicantSubmitStatus: (
    payload: UpdateApplicantSubmitStatusPayload
  ) => void;
  getApplicantsList: (payload: GetApplicantsListPayload) => void;
  getApplicantInfo: (payload: GetApplicantInfoPayload) => void;
  setPassword: (payload: string) => void;
  checkPassword: (payload: CheckPasswordRequest) => void;
  deleteApplicantTable: () => void;
}

const Applicant: FC<Props> = ({
  filters,
  applicantsList,
  currnetApplicantInfo,
  updateApplicantStatusStatus,
  password,
  setFilter,
  updateApplicantStatus,
  updateApplicantSubmitStatus,
  getApplicantsList,
  getApplicantInfo,
  setPassword,
  checkPassword,
  deleteApplicantTable,
}) => {
  const [isContainerWidth, setIsContainerWidth] =
    React.useState<boolean>(false);
  const [isDeleteTableModalSwitch, setIsDeleteTableModalSwitch] =
    React.useState<boolean>(false);

  const checkPasswordDisable = () => {
    if (password === "testpassword") {
      return true;
    }
    return false;
  };

  return (
    <>
      {isDeleteTableModalSwitch && (
        <DeleteTable
          password={password}
          applicantsList={applicantsList}
          disable={checkPasswordDisable()}
          setPassword={setPassword}
          checkPassword={checkPassword}
          deleteApplicantTable={deleteApplicantTable}
          setIsDeleteTableModalSwitch={setIsDeleteTableModalSwitch}
        />
      )}
      <S.Applicant>
        <S.ApplicantContainer>
          <FilterSearch
            filters={filters}
            isDeleteTableModalSwitch={isDeleteTableModalSwitch}
            setFilter={setFilter}
            getApplicantsList={getApplicantsList}
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
              getApplicantsList={getApplicantsList}
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
