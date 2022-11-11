import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function FilterModal({ setSearchBar, searchBar }) {
  return (
    <FormControl
      onChange={(e) =>
        setSearchBar({ ...searchBar, Subject: e.target.value })
      }
    >
      <FormLabel id="demo-radio-buttons-group-label">Filter</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={searchBar.Subject}
        name="radio-buttons-group"
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />

        
       
        <FormControlLabel
          value="Science"
          control={<Radio />}
          label="Science"
        />
        
        <FormControlLabel
          value="Sports"
          control={<Radio />}
          label="Sports"
        />
        <FormControlLabel value="Philosophy" control={<Radio />} label="Philosophy" />

        
         <FormControlLabel
          value="Engineering"
          control={<Radio />}
          label="Engineering"
        />
        <FormControlLabel
          value="Autobiography"
          control={<Radio />}
          label="Autobiography"
        />
      </RadioGroup>
    </FormControl>
  );
}
