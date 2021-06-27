import React, { FC } from "react";
import * as S from "./style";
import ApplicantInfo from "./ApplicantInfo";
import ApplicantsList from "./ApplicantsList";
import FilterSearch from "./FilterSearch";
import Pagination from "./Pagination";
import { useApplicant } from "../../hooks/applicant";

const Applicant: FC = () => {
  const {
    applicantStore: { currnetApplicantInfo, filters },
    getApplicantsList,
  } = useApplicant();

  React.useEffect(() => {
    // getApplicantsList(filters);
  }, [filters]);

  return (
    <S.Applicant>
      <S.ApplicantContainer>
        <FilterSearch />
        <ApplicantsList />
        <Pagination />
      </S.ApplicantContainer>
      {/* <S.ApplicantInfoWrap>
        {currnetApplicantInfo && <ApplicantInfo />}
      </S.ApplicantInfoWrap> */}
    </S.Applicant>
  );
};

export default Applicant;
