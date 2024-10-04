import React from "react";
import { findUser, createUser } from "../requests/userRequests";
import { loggedInAsync } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

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
      }

      const response = await findUser(userToFind);

      if (response !== null) {
        alert("The user is already exists. Please, log in");
        return navigate("/login");
      } else {
        const createdUser = await createUser(userToSave);
        if (createdUser.status === 200) {
          alert("You successfully signed up.");
          loggedInAsync(createdUser.data._id);
          navigate("/");
        }
      }
    }
  };

  return (
    <>
      <div>Registration Page</div>
      <form id="signUpForm" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input id="name" name="name" required></input>

        <label htmlFor="login">Enter your login:</label>
        <input id="login" name="login" required></input>

        <label htmlFor="password1">Enter your password:</label>
        <input id="password1" name="password1" type="password" required></input>

        <label htmlFor="password2">Repeat your password:</label>
        <input id="password2" name="password2" type="password" required></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
