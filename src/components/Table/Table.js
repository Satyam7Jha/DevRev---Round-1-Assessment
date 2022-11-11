import React from "react";
import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  Paper,
  TableRow,
  TableBody,
} from "@mui/material";

import "./Table.css";
import BasicSelect from "../DropDown";
import backword from "../../assets/backword.png";
import right from "../../assets/right.png";
import IconButton from "@mui/material/IconButton";

function TableComponent({ data, skip, limit, setSkip, setLimit }) {
  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table aria-label="history table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Book Id</TableCell>

              <TableCell align={"left"}>Author</TableCell>
              <TableCell align={"left"}>Title</TableCell>
              <TableCell align={"left"}>Catogry</TableCell>
              <TableCell align={"center"}>Qty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, ind) => (
              <TableRow
                class="tablRow"
                key={ind}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{skip + ind + 1}</TableCell>
                <TableCell>{row.isbn}</TableCell>
                <TableCell align={"left"}> {row.author}</TableCell>
                <TableCell align={"left"}>{row.title}</TableCell>
                <TableCell align={"left"}>{row.Subject}</TableCell>
                <TableCell align={"center"}>{row.availableItems}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div id="footer-container">
        <div
          style={{
            marginRight: "10px",
            marginTop: "3px",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <div style={{}}>
            <IconButton>
              <img
                style={{ height: "20px" }}
                src={backword}
                onClick={() => {
                  if (skip - limit >= 0) setSkip(skip - limit);
                  else {
                    alert("Cant go below 0");
                  }
                }}
              />
            </IconButton>

            <IconButton>
              <img
                style={{ height: "20px" }}
                src={right}
                onClick={() => setSkip(skip + limit)}
              />
            </IconButton>
          </div>
          <p style={{ marginLeft: "10px", marginRight: "5px" }}>
            Page No: {parseInt(skip / limit) + 1}
          </p>
        </div>
        <BasicSelect
          setFunction={(value) => {
            setSkip(0);
            setLimit(value);
          }}
          value={limit}
          valueList={[5, 10, 25, 50, 75, 100]}
        />
      </div>
    </div>
  );
}

export default TableComponent;
