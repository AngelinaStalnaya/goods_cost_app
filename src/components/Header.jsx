import React from "react";
import IconBtn from "./buttons/IconBtn";
import { useState } from "react";
import { SvgIcon, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import * as Svgs from "../images/svg/SvgIcons";

const Header = () => {
  const [authorized, setAuthorized] = useState(false);
  return (
    <header className="header">
      <Link to='/'><SvgIcon component={Svgs.BasicIcon} inheritViewBox /></Link>
      Handmade Goods Calculator
      <Divider />
      {authorized ? (
        <>
          <IconBtn
            aria_label="Sign out"
            handleBtnClick={() => {
              setAuthorized(false);
            }}
          >
            <SvgIcon component={Svgs.LockIcon} inheritViewBox />
            Sign Out
          </IconBtn>

          <IconBtn>
            <Link to='/profile'><SvgIcon component={Svgs.ProfileMen} inheritViewBox /></Link>
          </IconBtn>
        </>
      ) : (
        <IconBtn
          aria_label="Sign in"
          handleBtnClick={(e) => {
            e.preventDefault();
            console.log("sign in clicked");
            setAuthorized(true);
          }}
        >
          <SvgIcon component={Svgs.KeyIcon} inheritViewBox />
          Sign In
        </IconBtn>
      )}
    </header>
  );
};

export default Header;
