import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import BasicSelect from "./DropDown";

export default function SearchBar({ setSearchBar, searchBar, valueList }) {
  return (
    <Paper component="form" sx={styles.container}>
      <BasicSelect
        setFunction={(e) => setSearchBar({ ...searchBar, searchType: e })}
        value={searchBar.searchType}
        valueList={valueList}
      />

      <InputBase
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setSearchBar({
              ...searchBar,
              searchButton: !searchBar.searchButton,
            });
          }
        }}
        placeholder={`Search by ${searchBar.searchType}...`}
        onChange={(e) =>
          setSearchBar({ ...searchBar, searchValue: e.target.value })
        }
        value={searchBar.search}
      />
      <IconButton
        onClick={() =>
          setSearchBar({ ...searchBar, searchButton: !searchBar.searchButton })
        }
        type="button"
        sx={styles.icon}
        aria-label="search"
      >
        <img
          style={{ height: "20px" }}
          src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
        />{" "}
      </IconButton>
    </Paper>
  );
}

const styles = {
  container: {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 380,
    border: "3px solid #1976d2",
  },
  icon: {
    p: "10px",

    color: "#1976d2",
  },
};
