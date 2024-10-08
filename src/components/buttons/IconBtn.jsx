import React from "react";
import { IconButton } from "@mui/material";

const IconBtn = ({ children, aria_label, color, size, handleBtnClick }) => {
  return (
    <IconButton aria-label={aria_label} color={color} size={size} onClick={handleBtnClick}>
      {children}
    </IconButton>
  );
};

export default IconBtn;
