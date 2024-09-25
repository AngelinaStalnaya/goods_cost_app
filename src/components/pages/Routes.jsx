import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Profile from "./Profile";
import Error from './Error';
import CalculationForm from "./CalculationForm";



const RoutesComponent = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Calculator/>}/>
    <Route path='/profile' element={<Profile/>} />
    <Route path='/calculation/:projectName' element={<CalculationForm /> } />

    <Route path='*'  element={<Error />} />
  </Routes>
  </>
  )
};

export default RoutesComponent;
