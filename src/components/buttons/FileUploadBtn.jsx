import React from "react";
import { Button } from "@mui/material";

const FileUploadBtn = ({ variant, startIcon }) => {
  return (
    <Button
      component="label"
      role={undefined}
      variant={variant}
      tabIndex={-1}
      startIcon={startIcon}
    >
      Upload files
      <input type="file" onChange={(e) => console.log(e.target.files)} multiple />
    </Button>
  );
};

export default FileUploadBtn;
