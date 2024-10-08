import React from "react";
import IconBtn from "./buttons/IconBtn";
import { SvgIcon } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import * as Svgs from "../images/svg/SvgIcons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({userName, authorized,  loggedOut, clearState}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Grid container className="header">
        <Grid size={12} className="header__name">
          <Link to="/">
            <SvgIcon component={Svgs.BasicIcon} inheritViewBox />
          </Link>
          Handmade Goods Calculator
        </Grid>
        <Grid size={12} className="header__navigation">
          {authorized ? (
            <>
              <IconBtn
                aria_label="Sign out"
                handleBtnClick={() => {
                  dispatch(loggedOut());
                  dispatch(clearState())
                }}
              >
                <SvgIcon component={Svgs.LockIcon} inheritViewBox />
                Sign Out
              </IconBtn>

              <IconBtn>
                <Link to="/profile">
                  <SvgIcon component={Svgs.ProfileMen} inheritViewBox />
                  {userName}
                </Link>
              </IconBtn>
            </>
          ) : (
            <>
              <IconBtn
                aria_label="Sign up"
                handleBtnClick={() => {
                  return navigate("/signup");
                }}
              >
                <SvgIcon component={Svgs.LockIcon} inheritViewBox />
                Sign Up
              </IconBtn>
              <IconBtn
                aria_label="Log in"
                handleBtnClick={() => {
                  return navigate("/login");
                }}
              >
                <SvgIcon component={Svgs.KeyIcon} inheritViewBox />
                Log In
              </IconBtn>
            </>
          )}
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
