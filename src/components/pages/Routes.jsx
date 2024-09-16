import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Profile from "./Profile";
import Home from './Home';

const RoutesComponent = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/calculator' element={<Calculator/>}/>
    <Route path='/profile' element={<Profile/>} />
    <Route path='*' element={<Navigate replace to='/error' />} />
  </Routes>
  )
};

export default RoutesComponent;
