import React, { Suspense } from "react";
import IconBtn from "./buttons/IconBtn";
import { SvgIcon, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import * as Svgs from "../images/svg/SvgIcons";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loggedOut } from "../redux/user/userSlice";
import { clearState } from "../redux/calculations/calculationsListSlice";
import { clearCalculationState } from "../redux/calculations/calculationSlice";
import Loader from "./loader/Loader";

const Header = ({ authorized, userId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Grid
      container
      className="header"
      sx={{ flexDirection: ["column", "row"] }}
    >
      <Grid size={7} className="header__name">
        <Link to="/" className="header__icon-link">
          <SvgIcon
            component={Svgs.BasicIcon}
            inheritViewBox
            sx={{ width: ["2em", "3em"], height: ["2em", "3em"] }}
          />
        </Link>
        <Typography className="app_name" sx={{ fontSize: ["25px", "30px"] }}>
          Handmade Goods Cost Calculator
        </Typography>
      </Grid>
      <Grid size={5} className="header__navigation">
        {authorized ? (
          <>
            <Suspense fallback={<Loader />}>
              <IconBtn
                aria_label="Sign out"
                handleBtnClick={() => {
                  dispatch(loggedOut());
                  document.cookie = `HGCA=${userId}; secure; max-age=-1;`;
                  dispatch(clearState());
                  dispatch(clearCalculationState());
                }}
              >
                <SvgIcon
                  component={Svgs.PushIcon}
                  inheritViewBox
                  className="header__icon"
                />
                <Typography sx={{ fontSize: ["20px", "25px"] }}>
                  Sign Out
                </Typography>
              </IconBtn>

              <IconBtn
                aria-label="Profile"
                handleBtnClick={() => {
                  return navigate("/profile");
                }}
              >
                <SvgIcon
                  className="header__icon"
                  component={Svgs.HomeIcon}
                  inheritViewBox
                />
                <Typography sx={{ fontSize: ["20px", "25px"] }}>
                  Profile
                </Typography>
              </IconBtn>
            </Suspense>
          </>
        ) : (
          <>
            <Suspense fallback={<Loader />}>
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
                <Typography sx={{ fontSize: ["20px", "25px"] }}>
                  Sign Up
                </Typography>
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
                <Typography sx={{ fontSize: ["20px", "25px"] }}>
                  Log In
                </Typography>
              </IconBtn>
            </Suspense>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
