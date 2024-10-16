import React from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findUser, createUser } from "../../requests/userRequests";
import { loggedInAsync } from "../../redux/user/userSlice";


const SignUpWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    if (data.password1 !== data.password2) {
      alert("Passwords not matched. Please, enter the same passwords");
      return;
    } else {
      const userToFind = {
        login: data.login,
        password: data.password1,
      };

      const userToSave = {
        name: data.name,
        login: data.login,
        password: data.password1,
        sex: data?.sex,
      };

      const response = await findUser(userToFind);

      if (response !== null) {
        alert("The user is already exists. Please, log in");
        return navigate("/login");
      } else {
        const createdUser = await createUser(userToSave);
        if (createdUser.status === 200) {
          alert("You successfully signed up.");
          dispatch(loggedInAsync(createdUser.data._id));
          navigate("/");
        }
      }
    }
  };

  return <SignUp handleFormSubmit={handleFormSubmit}/>;
};

export default SignUpWrapper;
