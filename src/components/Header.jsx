import React from "react";
import IconBtn from "./buttons/IconBtn";
import { SvgIcon, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import * as Svgs from "../images/svg/SvgIcons";

import { useDispatch, useSelector } from "react-redux";
import { loggedOut, loggedIn, loggedInAsync } from "../redux/user/userSlice";

const Header = () => {
  const user = useSelector((AppSelector) => AppSelector.user.name);
  const authorized = useSelector(
    (AppSelector) => AppSelector.user.isAuthorized
  );
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Link to="/">
        <SvgIcon component={Svgs.BasicIcon} inheritViewBox />
      </Link>
      Handmade Goods Calculator
      <Divider />
      {authorized ? (
        <>
          <IconBtn
            aria_label="Sign out"
            handleBtnClick={() => {
              dispatch(loggedOut());
            }}
          >
            <SvgIcon component={Svgs.LockIcon} inheritViewBox />
            Sign Out
          </IconBtn>

          <IconBtn>
            <Link to="/profile">
              <SvgIcon component={Svgs.ProfileMen} inheritViewBox />
              {user}
            </Link>
          </IconBtn>
        </>
      ) : (
        <IconBtn
          aria_label="Sign in"
          handleBtnClick={() => {
            dispatch(loggedInAsync("66fe92b90bb11a54939e774c"));
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
