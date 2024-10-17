import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserCalculationsAsync } from "../../redux/calculations/calculationsListSlice";
import { Typography, SvgIcon } from "@mui/material";
import { InfoIcon } from "../../images/svg/SvgIcons";

const Profile = ({ authorized, userCalculations, userName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authorized) navigate("/");
  });

  useEffect(() => {
    dispatch(getUserCalculationsAsync(userName));
  });

  return (
    <>
      {userCalculations ? (
        <>
          <Typography
            sx={{ fontSize: "25px", mb: "20px" }}
            className="section__header"
          >
            The list of your calculations:
          </Typography>
          <ul className="list">
            {userCalculations?.map((item, index) => {
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
        </>
      ) : (
        <Typography
          sx={{ fontSize: "25px", mb: "20px" }}
          className="section__header"
        >
          You did not save any calculation
        </Typography>
      )}
    </>
  );
};

export default Profile;
