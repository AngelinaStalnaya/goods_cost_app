import React from 'react';
import ComonBtn from '../buttons/ComonBtn';
import { Typography } from '@mui/material';

const FormData = ({fieldName, fieldData, handleChange}) => {
  return (
    <div className='formdata__box'>
    <Typography>
        {fieldName}
    </Typography>
    <Typography>
        {fieldData}
    </Typography>

    <ComonBtn handleBtnClick={handleChange}></ComonBtn>
    </div>
  )
};

export default FormData;