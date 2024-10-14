import React from "react";
import Login from "./LogIn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findUser } from "../../requests/userRequests";

const LoginWrapper = ({ loggedInAsync }) => {
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
  return <Login handleFormSubmit={handleFormSubmit} />;
};

export default LoginWrapper;
