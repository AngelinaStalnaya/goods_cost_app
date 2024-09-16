import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Profile from "./Profile";
import Home from './Home';
import Error from './Error';



const RoutesComponent = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/calculator' element={<Calculator/>}/>
    <Route path='/profile' element={<Profile/>} />
    <Route path='*'  element={<Error />} />
  </Routes>
  </>
  )
};

export default RoutesComponent;
