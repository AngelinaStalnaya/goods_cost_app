import React from "react";
import { SvgIcon, Box } from "@mui/material";
import { SunIcon } from "../../images/svg/SvgIcons";

const Loader = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        position: "absolute",
        zIndex: "3",
        display: "flex",
        top: ["50%", "40%"],
        left: ["20%", "30%", "40%"],
      }}
    >
      <SvgIcon
        component={SunIcon}
        inheritViewBox
        className="loader"
        sx={{ width: ["2em", "3em"], height: ["2em", "3em"] }}
      />
      <SvgIcon
        component={SunIcon}
        inheritViewBox
        className="loader"
        sx={{ width: ["2em", "3em"], height: ["2em", "3em"] }}
      />
      <SvgIcon
        component={SunIcon}
        inheritViewBox
        className="loader"
        sx={{ width: ["2em", "3em"], height: ["2em", "3em"] }}
      />
    </Box>
  );
};

export default Loader;
