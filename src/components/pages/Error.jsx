import React from "react";
import { Typography, SvgIcon } from "@mui/material";
import ComonBtn from "../buttons/ComonBtn";
import { useNavigate } from "react-router-dom";
import { CancelIcon } from "../../images/svg/SvgIcons";

const Error = () => {
  const navigate = useNavigate();

  const handleBackBtnClick = () => navigate(-1);
  return (
    <div className="error_page">
      <SvgIcon
        component={CancelIcon}
        inheritViewBox
        className="loader"
        sx={{ width: ['4em', "7em"], height: ['4em', "7em"] }}
      />
      <Typography sx={{ fontSize: ['20px', "30px"] }}>
        Hmmmm.... that page does not exist.
      </Typography>
      <ComonBtn handleBtnClick={handleBackBtnClick} variant="contained" sx={{mt: '15px', fontSize: ["15px", "20px"]}}>Go back</ComonBtn>
    </div>
  );
};

export default Error;
