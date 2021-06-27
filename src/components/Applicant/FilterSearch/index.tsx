import * as React from "react";
import { list_progressbar, search_icon } from "../../../assets/applicants";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import FilterSearchWrapper from "./style";

function FilterSearch() {
  return (
    <FilterSearchWrapper>
      <SearchBar
        searchProgressImg={list_progressbar}
        searchIcon={search_icon}
      />
      <Filter />
    </FilterSearchWrapper>
  );
}

export default FilterSearch;
