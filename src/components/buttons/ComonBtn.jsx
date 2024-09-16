import React from "react";
import { Button } from "@mui/material";

const ComonBtn = ({ children, variant, disabled, handleBtnClick, sx }) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={handleBtnClick} sx={sx}>
      {children}
    </Button>
  );
};

export default ComonBtn;
