import React from "react";
import { SvgIcon, Box } from "@mui/material";
import {SunIcon} from '../../images/svg/SvgIcons';

const Loader = () => {
  return (
    <Box sx={{width: '300px', height: "300px", display: 'flex', justifyContent: 'center', position: "absolute"}}>
      <SvgIcon component={SunIcon} inheritViewBox className='loader' sx={{width: '3em', height: '3em'}}/>
      <SvgIcon component={SunIcon} inheritViewBox className='loader' sx={{width: '3em', height: '3em'}}/>
      <SvgIcon component={SunIcon} inheritViewBox className='loader' sx={{width: '3em', height: '3em'}}/>
    </Box>
  );
};

export default Loader;
