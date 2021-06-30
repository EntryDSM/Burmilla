import React, { FC } from "react";
import { list_progressbar, search_icon } from "../../../assets/applicants";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import FilterSearchWrapper from "./style";

const FilterSearch: FC = () => {
  return (
    <FilterSearchWrapper>
      <SearchBar
        searchProgressImg={list_progressbar}
        searchIcon={search_icon}
      />
      <Filter />
    </FilterSearchWrapper>
  );
};

export default FilterSearch;
