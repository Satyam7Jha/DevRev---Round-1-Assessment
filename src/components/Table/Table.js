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
import Lottie from "react-lottie";
import BasicSelect from "../DropDown";
import right from "../../assets/right.png";
import Tooltip from "@mui/material/Tooltip";
import backword from "../../assets/backword.png";
import NoDataAnimation from "../../assets/NoData.json";
import IconButton from "@mui/material/IconButton";

function TableComponent({
  data,
  skip,
  limit,
  setSkip,
  setLimit,
  totalPage,
  resultCount,
  sortColoum,
  setSortColoum,
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoDataAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
              <TableCell align={"left"}>Date</TableCell>
              <TableCell align={"center"}>Aavailable Qty</TableCell>
              <TableCell align={"left"}>Catogry</TableCell>
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
                <TableCell>{row.isbn.toString().slice(0, 6)}</TableCell>
                <TableCell align={"left"}> {row.author}</TableCell>
                <TableCell align={"left"}>{row.title}</TableCell>
                <TableCell align={"left"}>{row.date}</TableCell>
                <TableCell align={"center"}>{row.availableItems}</TableCell>
                <TableCell align={"left"}>{row.Subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            id="animation"
            options={defaultOptions}
            height={400}
            width={500}
          />
        </div>
      )}

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
            <Tooltip title="Previous Page" placement="bottom">
              <IconButton
                onClick={() => {
                  if (skip - limit >= 0) setSkip(skip - limit);
                }}
              >
                <img style={{ height: "20px" }} src={backword} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Next Page" placement="bottom">
              <IconButton
                onClick={() => {
                  if (parseInt(skip / limit) + 1 < totalPage) {
                    setSkip(skip + limit);
                  } else {
                    alert("No more Data To show!!");
                  }
                }}
              >
                <img style={{ height: "20px" }} src={right} />
              </IconButton>
            </Tooltip>
          </div>
          <p style={{ marginLeft: "10px", marginRight: "5px" }}>
            Page No: {parseInt(skip / limit) + 1} out of{" "}
            {totalPage === 0 ? 1 : totalPage}
          </p>
        </div>
        <div id="dropdown-container">
          <BasicSelect
            setFunction={(value) => {
              setSkip(0);
              setLimit(value);
            }}
            value={limit}
            valueList={[10, 25, 50, 75, 100]}
          />
          <p style={{ marginLeft: "10px", marginRight: "5px" }}>
            Total Books Found : {resultCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
