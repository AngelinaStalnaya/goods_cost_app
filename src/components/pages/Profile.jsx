import React, { useEffect, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserCalculationsAsync } from "../../redux/calculations/calculationsListSlice";
import { Typography, SvgIcon } from "@mui/material";
import { InfoIcon, CalculatorIcon } from "../../images/svg/SvgIcons";
import IconBtn from "../buttons/IconBtn";
import Loader from '../loader/Loader';

const Profile = ({ authorized, userCalculations, userName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authorized) navigate("/");
  });

  useEffect(() => {
    dispatch(getUserCalculationsAsync(userName));
  });

  const handleCalculatorClick = () => {
    navigate('/')
  }

  return (
    <>
      {userCalculations.length !== 0 ? (
        <>
          <Typography
            sx={{ fontSize: ['20px', "25px"], mb: "20px" }}
            className="section__header"
          >
            The list of your calculations:
          </Typography>
          <Suspense fallback={<Loader />}>
          <ul className="list">
            {userCalculations.map((item, index) => {
              return (
                <li key={index} className="list__item">
                  <SvgIcon component={InfoIcon} inheritViewBox />
                  {item.name}
                  <Link
                    to={`/calculation/${item.name}`}
                    state={{ id: item._id }}
                    className="list__item_link"
                  >
                    See in details
                  </Link>
                </li>
              );
            })}
          </ul>
          </Suspense>
        </>
      ) : (
        <>
          <Typography
            sx={{ fontSize: ['20px', "25px"], mb: "20px" }}
            className="section__header"
          >
            You have not save any calculation
          </Typography>
          <IconBtn handleBtnClick={handleCalculatorClick}>
            <SvgIcon
              component={CalculatorIcon}
              className="basic__icon"
              inheritViewBox
            />
            Go to Calculator
          </IconBtn>
        </>
      )}
    </>
  );
};

export default Profile;
