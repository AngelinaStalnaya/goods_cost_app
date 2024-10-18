import React from "react";
import IconBtn from "./buttons/IconBtn";
import { SvgIcon, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import * as Svgs from "../images/svg/SvgIcons";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loggedOut } from "../redux/user/userSlice";
import { clearState } from "../redux/calculations/calculationsListSlice";
import { clearCalculationState } from "../redux/calculations/calculationSlice";

const Header = ({ authorized, userId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Grid container className="header">
      <Grid size={7} className="header__name">
        <Link to="/" className="header__icon-link">
          <SvgIcon
            component={Svgs.BasicIcon}
            inheritViewBox
            sx={{ width: "3em", height: "3em" }}
          />
        </Link>
        <Typography sx={{ fontSize: "30px" }}>
          Handmade Goods Cost Calculator
        </Typography>
      </Grid>
      <Grid size={5} className="header__navigation">
        {authorized ? (
          <>
            <IconBtn
              aria_label="Sign out"
              handleBtnClick={() => {
                dispatch(loggedOut());
                document.cookie = `HGCA=${userId}; secure; max-age=-1`
                dispatch(clearState());
                dispatch(clearCalculationState());
              }}
            >
              <SvgIcon
                component={Svgs.PushIcon}
                inheritViewBox
                className="header__icon"
              />
              Sign Out
            </IconBtn>

            <IconBtn>
              <Link to="/profile">
                <SvgIcon
                  className="header__icon"
                  component={Svgs.HomeIcon}
                  inheritViewBox
                />
                Profile
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
              <SvgIcon
                className="header__icon"
                component={Svgs.LockIcon}
                inheritViewBox
              />
              Sign Up
            </IconBtn>
            <IconBtn
              aria_label="Log in"
              handleBtnClick={() => {
                return navigate("/login");
              }}
            >
              <SvgIcon
                component={Svgs.KeyIcon}
                inheritViewBox
                className="header__icon"
              />
              Log In
            </IconBtn>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
