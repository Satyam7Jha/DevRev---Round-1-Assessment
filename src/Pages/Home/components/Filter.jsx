import React from "react";
import filterIcon from "../../../assets/filterIcon.png"
import Tooltip from "@mui/material/Tooltip";

import "./Filter.css";
function Filter({ setOpen }) {
  return (
    <div
      class="filter"
     
      onClick={() => setOpen(true)}
    >
      <p class="filter-text">Filter</p>
      <img class="filter-icon" src={filterIcon}/>
    </div>
  );
}

export default Filter;
