import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  setFunction,
  value,
  valueList,
  boxWidth,
  type,
  marginginTop,
}) {
  const handleChange = (event) => {
    setFunction(event.target.value);
  };

  var selectedValue = value;

  return (
    <Box
      sx={{
        minWidth: 120,
        maxHeight: "25px",
        marginTop: marginginTop === true ? "" : "-15px",
      }}
    >
      <FormControl fullWidth>
        <Select
          style={{
            height: "40px",
            width: "100px",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label=""
          onChange={handleChange}
        >
          {valueList.map((item, ind) => {
            return (
              <MenuItem key={ind} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
