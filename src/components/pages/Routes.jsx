import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Profile from "./Profile";
import Error from './Error';
import CalculationForm from "./CalculationForm";
import SignUp from '../SignUp';
import LogIn from '../LogIn';



const RoutesComponent = ({authorized,   loggedOut, loggedInAsync}) => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Calculator authorised={authorized} loggedOut={loggedOut} />}/>
    <Route path='/profile' element={<Profile/>} />
    <Route path='/calculation/:projectName' element={<CalculationForm /> } />
    <Route path='/signup' element={<SignUp loggedInAsync={loggedInAsync}/>} />
    <Route path='/login' element={<LogIn loggedInAsync={loggedInAsync}/> } />


    <Route path='*'  element={<Error />} />
  </Routes>
  </>
  )
};

export default RoutesComponent;
