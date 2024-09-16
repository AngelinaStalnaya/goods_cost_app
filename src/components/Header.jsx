import React from "react";
import IconBtn from "./buttons/IconBtn";
import { useState } from "react";

const Header = () => {
  const [authorized, setAuthorized] = useState(true);
  return (
    <header className="header">
      icon name
      {authorized ? (  
        <>
          <IconBtn
            aria_label="Sign out"
            handlebtnclick={(e) => {
              e.preventDefault();
              console.log('sign out clicked')
              setAuthorized(false);
            }}
          >
            Sign Out
          </IconBtn>
          <IconBtn>Profile</IconBtn>
        </>
      ) : (
        <IconBtn
          aria_label="Sign in"
          handlebtnclick={(e) => {
            e.preventDefault();
            console.log('sign in clicked')
            setAuthorized(true);
          }}
        >
          Sign In
        </IconBtn>
      )}
    </header>
  );
};

export default Header;
