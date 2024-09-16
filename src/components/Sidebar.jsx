import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
      <Link to='/'>Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/profile">Profile</Link>
    </Box>
  );
};

export default Sidebar;
