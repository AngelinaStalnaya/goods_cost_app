import React from "react";

const SignUp = () => {
  return (
    <>
      <div>Registration Page</div>
      <form>
        <label htmlFor="name">Enter your name:</label>
        <input id="name" name="name" required></input>

        <label htmlFor="email">Enter your e-mail:</label>
        <input id="email" name="email" required></input>

        <label htmlFor="login">Enter your login:</label>
        <input id="login" name="login" required></input>

        <label htmlFor="password1">Enter your password:</label>
        <input id="password1" name="password1" type='password' required></input>

        <label htmlFor="password2">Repeat your password:</label>
        <input id="password2" name="password2" type='password' required></input>

        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("form submit clicked");
          }}
          type='submit'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUp;
