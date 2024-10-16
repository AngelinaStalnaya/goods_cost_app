import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Profile from "./Profile";
import Error from "./Error";
import CalculationForm from "./CalculationForm";
import SignUp from "../signup/SignUp";
import LoginWrapper from "../login/LoginWrapper";

const RoutesComponent = ({
  authorized,
  loggedInAsync,
  userName,
  userCalculations,
  currentCalculation,
  getCalculationDataAsync,
  getUserCalculationsAsync,
  updateCalculationDataAsync,
  deleteCalculationAsync
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Calculator authorized={authorized} userName={userName} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              authorized={authorized}
              userCalculations={userCalculations}
              userName={userName}
              getUserCalculationsAsync={getUserCalculationsAsync}
            />
          }
        />
        <Route
          path="/calculation/:projectName"
          element={
            <CalculationForm
              authorized={authorized}
              currentCalculation={currentCalculation}
              getCalculationDataAsync={getCalculationDataAsync}
              updateCalculationDataAsync={updateCalculationDataAsync}
              deleteCalculationAsync={deleteCalculationAsync}
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUp loggedInAsync={loggedInAsync} />}
        />
        <Route
          path="/login"
          element={<LoginWrapper loggedInAsync={loggedInAsync} />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
