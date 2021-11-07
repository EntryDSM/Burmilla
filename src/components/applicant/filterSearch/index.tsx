import React, { FC } from "react";
import { list_progressbar, search_icon } from "../../../assets/applicants";
import SearchBar from "./searchBar";
import Filter from "./filter";
import FilterSearchWrapper from "./style";
import { GetApplicantsListPayload } from "../../../data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  isDeleteTableModalSwitch: boolean;
  setFilter: (payload: GetApplicantsListPayload) => void;
  getApplicantsList: (payload: GetApplicantsListPayload) => void;
  setIsDeleteTableModalSwitch: (payload: boolean) => void;
}

const FilterSearch: FC<Props> = ({
  filters,
  isDeleteTableModalSwitch,
  setFilter,
  getApplicantsList,
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
        getApplicantsList={getApplicantsList}
        setIsDeleteTableModalSwitch={setIsDeleteTableModalSwitch}
      />
    </FilterSearchWrapper>
  );
};

export default FilterSearch;
