import React from "react";
import { Button } from "@mui/material";

const ComonBtn = ({ children, variant, disabled, handleBtnClick }) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={handleBtnClick}>
      {children}
    </Button>
  );
};

export default ComonBtn;
