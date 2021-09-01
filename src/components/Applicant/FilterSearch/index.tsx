import React, { FC } from "react";
import { list_progressbar, search_icon } from "../../../assets/applicants";
import SearchBar from "./searchBar";
import Filter from "./filter";
import FilterSearchWrapper from "./style";
import { GetApplicantsListPayload } from "../../../data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  setFilter: (payload: GetApplicantsListPayload) => void;
}

const FilterSearch: FC<Props> = ({ filters, setFilter }) => {
  return (
    <FilterSearchWrapper>
      <SearchBar
        searchProgressImg={list_progressbar}
        searchIcon={search_icon}
        setFilter={setFilter}
      />
      <Filter filters={filters} setFilter={setFilter} />
    </FilterSearchWrapper>
  );
};

export default FilterSearch;
