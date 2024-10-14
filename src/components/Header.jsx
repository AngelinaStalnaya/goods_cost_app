import React from "react";
import IconBtn from "./buttons/IconBtn";
import { SvgIcon } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import * as Svgs from "../images/svg/SvgIcons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({userName, authorized,  loggedOut, clearState, clearCalculationState}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Grid container className="header">
        <Grid size={12} className="header__name">
          <Link to="/">
            <SvgIcon component={Svgs.BasicIcon} inheritViewBox sx={{width: '3em', height: '3em'}}/>
          </Link>
          Handmade Goods Cost Calculator
        </Grid>
        <Grid size={12} className="header__navigation">
          {authorized ? (
            <>
              <IconBtn
                aria_label="Sign out"
                handleBtnClick={() => {
                  dispatch(loggedOut());
                  dispatch(clearState())
                  dispatch(clearCalculationState())
                }}
              >
                <SvgIcon component={Svgs.LockIcon} inheritViewBox sx={{width: '2em', height: '2em'}}/>
                Sign Out
              </IconBtn>

              <IconBtn>
                <Link to="/profile">
                  <SvgIcon component={Svgs.ProfileMen} inheritViewBox sx={{width: '2em', height: '2em'}}/>
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
                <SvgIcon component={Svgs.LockIcon} inheritViewBox sx={{width: '2em', height: '2em'}}/>
                Sign Up
              </IconBtn>
              <IconBtn
                aria_label="Log in"
                handleBtnClick={() => {
                  return navigate("/login");
                }}
              >
                <SvgIcon component={Svgs.KeyIcon} inheritViewBox sx={{width: '2em', height: '2em'}}/>
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
