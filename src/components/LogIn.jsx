import React from "react";
import { findUser } from "../requests/userRequests";
import { loggedInAsync } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);

    const response = await findUser(data);
    if (response === null) {
      alert("Wrong login or password. Please, try again!");
    } else {
      loggedInAsync(response._id);
      return navigate("/");
    }
  };

  return (
    <>
      <div>LogIn Page</div>
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
