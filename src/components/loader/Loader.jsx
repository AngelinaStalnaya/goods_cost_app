import React from "react";
import { SvgIcon, Box } from "@mui/material";
import {SunIcon} from '../../images/svg/SvgIcons';

const Loader = () => {
  return (
    <Box sx={{width: '800px', display: 'flex', justifyContent: 'center'}}>
      <SvgIcon component={SunIcon} inheritViewBox className='loader' sx={{width: '3em', height: '3em'}}/>
      <SvgIcon component={SunIcon} inheritViewBox className='loader' sx={{width: '3em', height: '3em'}}/>
      <SvgIcon component={SunIcon} inheritViewBox className='loader' sx={{width: '3em', height: '3em'}}/>
    </Box>
  );
};

export default Loader;
