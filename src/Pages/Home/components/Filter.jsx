import React from "react";
import filterIcon from "../../../assets/filterIcon.png"

import "./Filter.css";
function Filter({ setOpen }) {
  return (
    <div
      class="filter"
     
      onClick={() => setOpen(true)}
    >
      <p class="filter-text">Filter</p>
      <img style = {{height:"25px",paddingRight:"20px"}} src={filterIcon}/>
    </div>
  );
}

export default Filter;
