import React from "react";
import {findUser} from '../requests/userRequests';
 

const LogIn = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(data)

    // let response = await findUser(data);
    // alert(response);
  };

  return (
    <>
      <div>LogIn Page</div>
      <form
        id="logInForm"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="login">Enter login</label>
        <input id="login" name="login" required type="text"></input>

        <label htmlFor="password">Enter password</label>
        <input id="password" name="password" type="password" required></input>

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default LogIn;
