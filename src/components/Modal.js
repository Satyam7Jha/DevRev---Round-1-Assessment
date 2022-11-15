import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import cross from "../assets/cross.png";
import "./Modal.css";

export default function ModalComponent({ modal, setModal }) {
  const handleClose = () =>
    setModal({
      visible: false,
      data: {},
    });

  return (
    <div>
      <Modal open={modal.visible} onClose={handleClose}>
        <Box id="modal-box">
          <div id="modal-headder">
            <Typography variant="h4" component="h2">
              Book Details
            </Typography>
            <IconButton onClick={handleClose}>
              <img style={{ widht: "30px", height: "30px" }} src={cross} />
            </IconButton>
          </div>

          <div id="modal-container">
            <div id="left-div">
              <img id="book-img" src={modal.data.img} />
            </div>
            <div id="right-div">
              <Typography variant="h5" component="h6">
                {modal.data.title}.
              </Typography>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Typography variant="h6" component="h9">
                  {modal.data.author}
                </Typography>
              </div>

              <table>
                <tr>
                  <th style={{ textAlign: "left" }}>Rating</th>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <img
                        id="star"
                        src="https://github.com/Satyam7Jha/College-Connect/blob/master/assets/star.png?raw=true"
                      />
                      <Typography variant="h6" component="h6">
                        4.5
                      </Typography>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>Date</th>
                  <td>{modal.data.date}</td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>Catogry</th>
                  <td>{modal.data.Subject}</td>
                </tr>
              </table>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
