import React from "react";
import { Typography } from "@mui/material";

const SignUp = ({ handleFormSubmit }) => {
  return (
    <>
      <Typography className="section__header" sx={{ fontSize: "25px" }}>
        Sign up with your data:
      </Typography>
      <form id="signUpForm" onSubmit={handleFormSubmit} className="form__auth">
        <label htmlFor="name" className="input__label">
          Enter your name:
        </label>
        <input
          id="name"
          name="name"
          required
          type="text"
          className="input"
        ></input>

        <label htmlFor="login" className="input__label">
          Enter your login:
        </label>
        <input
          id="login"
          name="login"
          required
          type="text"
          className="input"
        ></input>

        <label htmlFor="password1" className="input__label">
          Enter your password:
        </label>
        <input
          id="password1"
          name="password1"
          type="password"
          required
          className="input"
        ></input>

        <label htmlFor="password2" className="input__label">
          Repeat your password:
        </label>
        <input
          id="password2"
          name="password2"
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

export default SignUp;
