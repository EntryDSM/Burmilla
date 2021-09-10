import React, { FC } from "react";
import { list_progressbar, search_icon } from "../../../assets/applicants";
import SearchBar from "./searchBar";
import Filter from "./filter";
import FilterSearchWrapper from "./style";
import {
  GetApplicantsListPayload,
  CheckPasswordRequest,
} from "../../../data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  isDeleteTableModalSwitch: boolean;
  isCheckPassword: boolean;
  setFilter: (payload: GetApplicantsListPayload) => void;
  checkPassword: (payload: CheckPasswordRequest) => void;
  deleteApplicantTable: () => void;
  setIsDeleteTableModalSwitch: (payload: boolean) => void;
}

const FilterSearch: FC<Props> = ({
  filters,
  isCheckPassword,
  isDeleteTableModalSwitch,
  setFilter,
  checkPassword,
  deleteApplicantTable,
  setIsDeleteTableModalSwitch,
}) => {
  return (
    <FilterSearchWrapper>
      <SearchBar
        searchProgressImg={list_progressbar}
        searchIcon={search_icon}
        setFilter={setFilter}
      />
      <Filter
        disable={!isCheckPassword}
        filters={filters}
        isCheckPassword={isCheckPassword}
        isDeleteTableModalSwitch={isDeleteTableModalSwitch}
        setFilter={setFilter}
        deleteApplicantTable={deleteApplicantTable}
        checkPassword={checkPassword}
        setIsDeleteTableModalSwitch={setIsDeleteTableModalSwitch}
      />
    </FilterSearchWrapper>
  );
};

export default FilterSearch;
