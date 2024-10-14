import React from "react";
import { findUser } from "../requests/userRequests";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const LogIn = ({loggedInAsync}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const response = await findUser(data);
    if (response === null) {
      alert("Wrong login or password. Please, try again!");
    } else {
      dispatch(loggedInAsync(response._id));
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
