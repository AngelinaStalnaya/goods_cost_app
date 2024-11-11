import React from "react";
import { Typography } from "@mui/material";

const LogIn = ({ handleFormSubmit }) => {
  return (
    <>
      <Typography className="section__header" sx={{ fontSize: ["20px", "25px"]}}>
        Log in with your password:
      </Typography>
      <form id="logInForm" onSubmit={handleFormSubmit} className="form__auth">
        <label htmlFor="login" className="input__label">
          Enter login:
        </label>
        <input
          id="login"
          name="login"
          required
          type="text"
          className="input"
        ></input>

        <label htmlFor="password" className="input__label">
          Enter password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="input"
        ></input>

        <button type="submit" className="input__btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default LogIn;
