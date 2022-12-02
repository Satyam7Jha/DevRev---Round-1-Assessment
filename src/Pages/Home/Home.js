import React, { useState, useEffect } from "react";
import "./Home.css";
import { BOOKDATA } from "../../data";
import Filter from "./components/Filter";
import SearchBar from "../../components/SearchBar";
import FilterModal from "./components/FilterModal";
import TableComponent from "../../components/Table/Table";
import { filterBooks } from "../../Utils/helperFunctions";
import ModalComponent from "../../components/Modal";

export default function Home() {
  const [bookData, setBookData] = useState(BOOKDATA);
  const [filterModal, setFilterModal] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [resultCount, setSetResultCount] = useState(BOOKDATA.length);

  const [modal, setModal] = useState({
    visible: false,
    data: {},
  });
  const [sortColoum, setSortColoum] = useState({
    Date: false,
  });

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
    setSetResultCount(filterData["totalLength"]);
    setTotalPages(
      parseInt(filterData["totalLength"] / limit) ==
        filterData["totalLength"] / limit
        ? filterData["totalLength"] / limit
        : parseInt(filterData["totalLength"] / limit) + 1
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
          valueList={["Author", "Title", "Date"]}
        />
        <Filter setOpen={setFilterModal} filterModal={filterModal} />
      </div>
      {filterModal && (
        <div
          id="filter-modal"
          onMouseLeave={() => setFilterModal(!filterModal)}
        >
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
        resultCount={resultCount}
        sortColoum={sortColoum}
        setSortColoum={setSortColoum}
        modal={modal}
        setModal={setModal}
      />
      <ModalComponent modal={modal} setModal={setModal} />
    </div>
  );
}
