import React from "react";

const LogIn = ({handleFormSubmit}) => {

  return (
    <>
      <div>Log in with your password:</div>
      <form id="logInForm" onSubmit={handleFormSubmit}>
        <label htmlFor="login">Enter login</label>
        <input id="login" name="login" required type="text"></input>

        <label htmlFor="password">Enter password</label>
        <input id="password" name="password" type="password" required></input>

        <button type="submit">Submit</button>
      </form>

    </>
  );
};

export default LogIn;
