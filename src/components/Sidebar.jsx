import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box className='sidebar' sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
      <Link to='/' className="sidebar__link">Home</Link>
      <Link to="/calculator" className="sidebar__link">Calculator</Link>
      <Link to="/profile" className="sidebar__link">Profile</Link>
      
    </Box>
  );
};

export default Sidebar;
