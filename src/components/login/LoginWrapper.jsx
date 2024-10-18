import React from "react";
import Login from "./LogIn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findUser } from "../../requests/userRequests";
import { loggedInAsync } from "../../redux/user/userSlice";

const LoginWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const response = await findUser(data);


    if (response === null) {
      alert("Wrong login. Please, try again!");
    } else if (response === "Wrong password") {
      alert("Wrong password. Please, try again!");
    } else {
      dispatch(loggedInAsync(response._id));
      document.cookie = `HGCA=${response._id}; secure; max-age=3600`
      return navigate("/");
    }
  };
  return <Login handleFormSubmit={handleFormSubmit} />;
};

export default LoginWrapper;
