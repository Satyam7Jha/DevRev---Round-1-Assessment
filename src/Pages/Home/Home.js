import React, { useState, useEffect } from "react";

import "./Home.css";
import { BOOKDATA } from "../../data";
import Filter from "./components/Filter";
import SearchBar from "../../components/SearchBar";
import FilterModal from "./components/FilterModal";
import TableComponent from "../../components/Table/Table";
import { filterBooks } from "../../Utils/helperFunctions";

export default function Home() {
  const [bookData, setBookData] = useState(BOOKDATA);
  const [filterModal, setFilterModal] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(BOOKDATA.length);
  const [searchBar, setSearchBar] = useState({
    searchValue: "",
    searchType: "Author",
    searchButton: false,
    Subject: "All",
  });

  useEffect(() => {
    let filterData = filterBooks(
      searchBar.searchType,
      searchBar.searchValue,
      BOOKDATA,
      searchBar.Subject,
      skip,
      limit
    );
    setBookData(filterData["data"]);
    setTotalPages(
      parseInt(filterData["totalLenght"] / limit) ==
        filterData["totalLenght"] / limit
        ? filterData["totalLenght"] / limit
        : parseInt(filterData["totalLenght"] / limit) + 1
    );
  }, [searchBar.searchButton, searchBar.Subject, skip, limit]);

  useEffect(() => {
    setSkip(0);
  }, [searchBar.Subject, searchBar.searchButton]);

  return (
    <div id="container">
      <div id="searchBar-filter-container">
        <SearchBar
          setSearchBar={setSearchBar}
          searchBar={searchBar}
          valueList={["Author", "Title"]}
        />
        <Filter setOpen={setFilterModal} />
      </div>
      {filterModal && (
        <div id="filter-modal" onMouseLeave={() => setFilterModal(false)}>
          <FilterModal setSearchBar={setSearchBar} searchBar={searchBar} />
        </div>
      )}
      <TableComponent
        data={bookData}
        skip={skip}
        limit={limit}
        setSkip={setSkip}
        setLimit={setLimit}
        totalPage={totalPages}
      />
    </div>
  );
}
