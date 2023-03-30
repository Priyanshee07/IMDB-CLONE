import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  return (
    <div className="user-container">
      <div className="header">
        <Typography
          size="small"
          style={{ color: "purple" }}
          variant="h5"
          color="initial"
        >
          ENTER USER DETAILS
        </Typography>
      </div>
      <form action="" method="post" onSubmit={handleSignUp}>
        <div className="input-firstname">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter First Name*"
            variant="outlined"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="input-middlename">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Middle Name*"
            variant="outlined"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
          />
        </div>
        <div className="input-lastname">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Last Name*"
            variant="outlined"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="input-phone">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Phone Number*"
            variant="outlined"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="input-email">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Email*"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-password">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Password*"
            variant="outlined"
          />
        </div>
        <div className="button">
          <Button
            style={{ margin: "10px" }}
            color="success"
            variant="contained"
            type="submit"
          >
            CLEAR
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            color="primary"
            onClick={() => navigate("/home")}
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
}
