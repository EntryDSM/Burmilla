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
  setFilter: (payload: GetApplicantsListPayload) => void;
  checkPassword: (payload: CheckPasswordRequest) => void;
  deleteApplicantTable: () => void;
  setIsDeleteTableModalSwitch: (payload: boolean) => void;
}

const FilterSearch: FC<Props> = ({
  filters,
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
        filters={filters}
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
